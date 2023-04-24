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
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  /*
  // Static HTML Export does not support redirects
  // This may be bad for SEO
  // Saving here in case we have a solution down the road
  redirects: async function() {
    return [
      {
        source: '/2023/01/31/state-of-devops.html',
        destination: '/insights/state-of-devops-2022-the-j-curve',
        permanent: true,
      },
      {
        source: '/2022/08/08/crossplane-demo.html',
        destination: '/insights/crossplane-a-kubernetes-powered-iac-tool',
        permanent: true,
      },
      {
        source: '2022/03/31/predict-product-ratings.html',
        destination: '/insights/predict-product-ratings',
        permanent: true,
      },
      {
        source: '/2021/07/22/randomize-slack-2.html',
        destination: '/insights/randomize-slack-2',
        permanent: true,
      },
      {
        source: '/2021/07/13/randomize-slack.html',
        destination: '/insights/randomize-slack',
        permanent: true,
      },
      {
        source: '/2021/02/18/interview-timothy-hunt.html',
        destination: '/insights/interview-timothy-hunt',
        permanent: true,
      },
      {
        source: '/2021/02/01/aws-config-compliance-automation.html',
        destination: '/insights/aws-config-compliance-automation',
        permanent: true,
      },
      {
        source: '/2021/01/08/predicting-house-prices.html',
        destination: '/insights/predicting-house-prices',
        permanent: true,
      },
      {
        source: '/2020/09/28/randomize-twitter.html',
        destination: '/insights/randomize-twitter',
        permanent: true,
      },
      {
        source: '/2020/07/28/mentoring-at-any-level.html',
        destination: '/insights/mentoring-at-any-level',
        permanent: true,
      },
      {
        source: '/2020/07/17/ocelot-identity.html',
        destination: '/insights/ocelot-identity',
        permanent: true,
      },
      {
        source: '/2020/07/11/diversity-for-the-right-solution.html',
        destination: '/insights/diversity-for-the-right-solution',
        permanent: true,
      },
      {
        source: '/2020/07/07/virtual-voice-assistant-daughter.html',
        destination: '/insights/virtual-voice-assistant-daughter',
        permanent: true,
      },
      {
        source: '/2020/05/20/using-cloudwatch-synthetics.html',
        destination: '/insights/using-cloudwatch-synthetics',
        permanent: true,
      },
      {
        source: '/2019/08/15/embrace-your-constraints.html',
        destination: '/insights/embrace-your-constraints',
        permanent: true,
      },
      {
        source: '/2019/02/25/the-right-abstraction-for-lambdas.html',
        destination: '/insights/the-right-abstraction-for-lambdas',
        permanent: true,
      },
      {
        source: '/2019/02/21/react-enzyme-testing.html',
        destination: '/insights/react-enzyme-testing',
        permanent: true,
      },
      {
        source: '/2018/01/08/rust-error-handling.html',
        destination: '/insights/rust-error-handling',
        permanent: true,
      },
      {
        source: '/2017/12/18/lambda-gateway.html',
        destination: '/insights/lambda-gateway',
        permanent: true,
      },
      {
        source: '/2016/10/28/stl-owasp-ctf.html',
        destination: '/insights/stl-owasp-ctf',
        permanent: true,
      },
      {
        source: '/2016/10/27/global-hack-6.html',
        destination: '/insights/global-hack-6',
        permanent: true,
      },
      {
        source: '/2016/10/17/snap-slack.html',
        destination: '/insights/snap-slack',
        permanent: true,
      },
      {
        source: '/2016/10/10/entitlements.html',
        destination: '/insights/dynamic-entitlements',
        permanent: true,
      },
      {
        source: '/2016/10/07/letsencrypt-lambda.html',
        destination: '/insights/letsencrypt-lambda',
        permanent: true,
      },
      {
        source: '/2016/10/02/cloudfront-security.html',
        destination: '/insights/cloudfront-security',
        permanent: true,
      },
      {
        source: '/2016/09/22/launching-ocelot.html',
        destination: '/insights/launching-ocelot',
        permanent: true,
      }
    ]
  }
  */
}

export default withMDX(nextConfig)
