/** @type {import('next').NextConfig} */
const nextConfig = {
  // To pass on the URL to next Supported URL patterns
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.course-api.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
