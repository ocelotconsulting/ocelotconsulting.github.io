import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkPrism from 'remark-prism'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  providerImportSource: "@mdx-js/react",
  options: {
    remarkPlugins: [remarkPrism, remarkGfm],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: 'NEXT_PUBLIC_BASEPATH' in process.env ? process.env.NEXT_PUBLIC_BASEPATH : '',
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
}

export default withMDX(nextConfig)
