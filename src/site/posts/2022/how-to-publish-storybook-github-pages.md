---
title: "How to publish Storybook to Github Pages"
date: 2022-03-14
category: 'storybook'
tags: ['storybook']
---

In this post, I'm going to share about how to deploy Storybook to Gihub pages via Github Actions.

Assume that you already have Storybook installed. If not, please follow this [guideline](https://storybook.js.org/docs/react/get-started/install).
It really depends on the framework you're using.

After installation, the `package.json` must contain a command `build-storybook`. This command will be used
to generate production build / static files of Storybook

`package.json`

```json
"scripts": {
  "build-storybook": "build-storybook",
  ...
},
```

## Create gh-pages branch

There are many ways to setup Github Pages such as:

1. Use existing branch and target root folder or `/docs` folder
2. Create a new branch `gh-pages` and target root folder or `/docs` folder

I prefer (2) using root folder in this case because for (1) you needs to track static files of Storybook in Github which I feel unnecessary.

Ensure you have created the `gh-pages` branch via Github UI or CLI.

Then from Github Repository Settings, set the source to target `gh-pages` and select root folder. You'll also see the Github Pages URL on this page.

[![storybook github pages setting](/images/2022/storybook-github-pages-setting.jpg)](/images/2022/storybook-github-pages-setting.jpg "Storybook github pages")

## Create Storybook Github Action workflow

Now create a new file `.github/workflows/storybook.yml`, and define Github Actions below

```yaml
name: Storybook
on:
  push:
    branches:
      - main # if any push happens on branch `main`, run this workflow. You could also add `paths` to detect changes in specific folder

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.1

      - name: Install and Build
        run: |
          npm ci
          npm run build-storybook

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@3.6.2
        with:
          branch: gh-pages
          folder: storybook-static # output folder from `npm run build-storybook`

```

## Publish Storybook

Push the changes to `main` branch to trigger Storybook deployment

If everything is OK, Storybook will be published to Github Pages at the given URL on Settings page.

[![storybook github pages deployed](/images/2022/storybook-github-pages-deployed.jpg)](/images/2022/storybook-github-pages-deployed.jpg "Storybook github pages deployed")

See the example [Github repository](https://github.com/deerawan/storybook-github-pages-example/settings/pages)
