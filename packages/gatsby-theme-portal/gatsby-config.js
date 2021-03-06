/* eslint-disable @typescript-eslint/camelcase */

const path = require('path');

module.exports = ({ themeConfig }) => {
  const siteMetadata = {
    siteName: themeConfig['site_name'],
    siteUrl: themeConfig['meta_host'],
    lang: themeConfig['meta_lang'],
    sanityId: themeConfig['sanity_id'],
    sanityDataset: themeConfig['sanity_dataset'],
  };

  const netlifyOptions = {
    mergeSecurityHeaders: false,
    mergeCachingHeaders: false,
    headers: {
      '/*': [
        `X-Frame-Options: DENY`,
        `X-XSS-Protection: 1; mode=block`,
        `X-Content-Type-Options: nosniff`,
        `Referrer-Policy: strict-origin-when-cross-origin`, // need to reqrite only this one to enable Kritique widget but because of plugin implemetation every security header is defined
      ],
    },
  };
  const noCacheHeader = `Cache-Control: public, max-age=0, must-revalidate`;

  if (themeConfig['nocache'] === 'true') {
    netlifyOptions.headers['/*'].push(noCacheHeader);
  } else {
    netlifyOptions.headers['/webpack-runtime.js'] = [noCacheHeader];
    netlifyOptions.headers['/styles.js'] = [noCacheHeader];
    netlifyOptions.headers['/commons.js'] = [noCacheHeader];
    netlifyOptions.headers['/app.js'] = [noCacheHeader];
  }
  const sanitySourcePlugin = {
    resolve: `gatsby-source-sanity`,
    options: {
      projectId: siteMetadata.sanityId,
      dataset: siteMetadata.sanityDataset,
    },
  };

  if (themeConfig['sanity_token']) {
    sanitySourcePlugin.options.token = themeConfig['sanity_token'];
  }

  const plugins = [
    'gatsby-plugin-material-ui',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-zopfli',
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: false,
        svgoConfig: {
          plugins: [
            { removeViewBox: false },
            { cleanupNumericValues: true },
            { prefixIds: true },
          ],
        },
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-source-sanity-transform-images',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        integrations: path.join(__dirname, 'integrations'),
        lib: path.join(__dirname, 'src/components/lib'),
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: netlifyOptions,
    },
  ];
  plugins.push(sanitySourcePlugin);

  return {
    siteMetadata,
    plugins,
  };
};
