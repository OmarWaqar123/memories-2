/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
         ignoreDuringBuilds: true,
       },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'a.storyblok.com',
            
          }
        ],
      },
}

module.exports = nextConfig
