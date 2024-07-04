/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: 'upload.wikimedia.org',
        },
        {
          hostname: 'www.pixibitdesign.com',
        },
        {
          protocol: 'https',
          hostname: 'scontent.fcai21-4.fna.fbcdn.net',
        }
      ],
    },
  };
  
  export default nextConfig;
  