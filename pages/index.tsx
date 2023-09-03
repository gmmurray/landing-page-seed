import React, { Fragment } from 'react';

import { NextSeo } from 'next-seo';

function IndexPage() {
  return (
    <Fragment>
      <NextSeo title="Landing Page" />
      <main>
        <h1>Landing Page</h1>
      </main>
    </Fragment>
  );
}

export default IndexPage;
