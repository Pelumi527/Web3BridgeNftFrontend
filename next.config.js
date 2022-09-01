/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return [
      {
        source:'/',
        destination: '/home',
        permanent: true
      },
      {
        source:'/mint',
        destination:'/home'
      }
      
    ]
  }
}

module.exports = nextConfig
