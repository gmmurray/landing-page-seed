import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Fragment } from 'react';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GoogleAnalytics trackPageViews />
      <DefaultSeo
        title="Welcome"
        titleTemplate="%s | Landing Page Seed"
        description="A template for Landing Websites using solid SEO"
        openGraph={{
          type: 'website',
          url: 'https://example.com',
          images: [
            {
              url: 'https://example.com',
              width: 800,
              height: 600,
              alt: 'alt',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}
