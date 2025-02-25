/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/marmot-dynamics-portfolio', 
  assetPrefix: '/marmot-dynamics-portfolio/', 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;

