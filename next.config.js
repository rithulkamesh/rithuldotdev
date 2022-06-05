module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.hashnode.com']
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/tqtuSttKxA',
        permanent: true,
      },
    ]
  },
};
