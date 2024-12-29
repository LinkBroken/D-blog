/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: 'marketing4ecommerce.net',

        },
        {
          hostname:"www.pixibitdesign.com"
        },
        {
          hostname: 'i.dailymail.co.uk',
        },
        {
          protocol: 'https',
          hostname: 'scontent*',
        }
      ],
    },
  };
  
  export default nextConfig;
  