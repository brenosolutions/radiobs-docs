import nextra from 'nextra';

const withNextra = nextra({
  latex: true,
  contentDirBasePath: '/'
});

export default withNextra({
  reactStrictMode: true,
  basePath: '/radiobs',
  assetPrefix: '/radiobs/',
  trailingSlash: true
});
