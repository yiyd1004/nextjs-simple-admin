/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/nextjs-simple-admin",
    images: {
        unoptimized: true,
        domains: [
            "images.pexels.com",
            "store.sony.com.au",
            "www.pngmart.com",
            "images.samsung.com",
            "raylo.imgix.net",
            "www.signify.com",
            "www.smartworld.it",
            "www.pngarts.com",
            "5.imimg.com",
            "img.productz.com",
            "venturebeat.com",
        ],
    },
};

module.exports = nextConfig;
