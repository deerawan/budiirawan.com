
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const dateFilter = require("./src/utils/filters/date.js");

module.exports = function(config) {

  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // Add some utility filters
  config.addFilter("squash", require("./src/utils/filters/squash.js") );
  config.addFilter("dateDisplay", dateFilter);
  config.addFilter("dateDisplayShort", (dateObj) => dateFilter(dateObj, "LLL, d"));

  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);

  // add RSS plugin
  config.addPlugin(pluginRss);

  // minify the html output
  config.addTransform("htmlmin", require("./src/utils/minify-html.js"));

  // to deep merge tags
  config.setDataDeepMerge(true);

  // compress and combine js files
  config.addFilter("jsmin", function(code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
      if( minified.error ) {
          console.log("UglifyJS error: ", minified.error);
          return code;
      }
      return minified.code;
  });

  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");

  config.addCollection('recentPosts', (collection) => {
    const posts = collection.getFilteredByTag('post').reverse();
    return posts.slice(0, 5);
  })

  config.addCollection("postsByYear", (collection) => {
    const posts = collection.getFilteredByTag('post').reverse();
    const years = posts.map(post => post.date.getFullYear());
    const uniqueYears = [...new Set(years)];

    const postsGroupedByYears = uniqueYears.reduce((prev, year) => {
      const filteredPosts = posts.filter(post => post.date.getFullYear() === year);

      return [
        ...prev,
        [year, filteredPosts]
      ]
    }, []);

    return postsGroupedByYears;
  });

  // make the seed target act like prod
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: "src/site",
      output: "dist",
      data: `_data/${env}`
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };

};
