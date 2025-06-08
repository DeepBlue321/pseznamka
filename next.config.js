/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn3.gstatic.com/**',
        port: '',
        search: '',
      },
    ],
  },
}
