/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'
import rehypePrism from '@mapbox/rehype-prism'
import remarkGfm from 'remark-gfm'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    outputFileTracingIncludes: {
      '/articles/*': ['./src/app/articles/**/*.mdx'],
    },
  },
  output: 'standalone',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: "asset/resource",
    });
    return config;
  },
};
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
  },
})

export default withMDX(nextConfig);
