import * as React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

export default function Head(): JSX.Element {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>maechabin.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </>
  );
}
