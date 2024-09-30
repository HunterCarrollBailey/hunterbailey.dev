// next.config.mjs
import withMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'standalone',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default withMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})(nextConfig);
