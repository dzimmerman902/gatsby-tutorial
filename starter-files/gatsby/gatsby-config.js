import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Denver`,
    twitter: `@slicksSlices`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // Name of plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'u4v74r21',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
