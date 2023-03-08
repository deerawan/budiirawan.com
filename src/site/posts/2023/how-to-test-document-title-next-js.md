---
title: "Next.js: How to Unit Test Document Title in Jest"
date: 2023-03-08
category: 'nextjs'
tags: ['next.js', 'jest']
---

Next.js provides a `<Head>` component where you could specify HTML document title `<title>` as children prop.

Below is the example of a simple component that use `<Head>` and `<title>`

```ts
import Head from 'next/head';

export interface PageTitleProps {
  title?: string
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
```

To test the component, the key point is to mock the `next/head` component.

```ts
import { render, waitFor } from '@/test-utils';

import { PageTitle } from './PageTitle';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe('<PageTitle />', () => {
  it('should render expected components', async () => {
    const title = "test title";

    render(<PageTitle title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
```
