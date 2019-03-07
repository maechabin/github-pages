import * as React from 'react';
import Helmet from '../components/index/Helmet';
import Layout from '../components/layout/Layout';
import Main from '../components/index/Main';

export default function Index() {
  return (
    <>
      <Helmet />
      <Layout>
        <Main />
      </Layout>
    </>
  );
}
