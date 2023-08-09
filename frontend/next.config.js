/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'http',
      //   hostname: '127.0.0.1',
      //   port: '8000',
      //   pathname: '/**',
      // },
      // {
      //   protocol: 'http',
      //   hostname: '127.0.0.1',
      //   port: '8000',
      //   pathname: '/media/**',
      // },
      {
        protocol: "https",
        hostname: "**",
      },
      // {
      //   protocol: "https",
      //   hostname: "clipart-library.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      // },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
