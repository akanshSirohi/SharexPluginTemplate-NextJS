/** @type {import('next').NextConfig} */

// DEBUG
const sharex_package_name = 'debug';

// PRODUCTION
// const sharex_package_name = 'sharex.next.app';

// Build - Debugging or Production
// const basePath = `/SharexApp/${sharex_package_name}`;

// Live - Debugging
const basePath = "";

const nextConfig = {
    output: 'export',
    basePath: basePath,
    assetPrefix: basePath,
    images: { 
        unoptimized: true 
    },
};

export default nextConfig;
