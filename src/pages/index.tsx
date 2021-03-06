import * as React from 'react';
import Helmet from '../components/index/Helmet';
import Layout from '../components/layout/Layout';
import Main from '../components/index/Main';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

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
