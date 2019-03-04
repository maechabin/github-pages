import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import Main from '../components/index/Main';

export default function Index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>maechabin.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          {`
            body {
              padding: 0;
              margin: 0;
              font-family: 'SF Pro JP', 'SF Pro Text', 'SF Pro Icons',
                'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', メイリオ, Meiryo,
                'ＭＳ Ｐゴシック', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            }
          `}
        </style>
      </Helmet>
      <Layout>
        <Main />
      </Layout>
    </>
  );
}
