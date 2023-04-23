const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  providerImportSource: "@mdx-js/react",
  options: {
    remarkPlugins: [require("remark-prism")],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
}

module.exports = withMDX(nextConfig)
