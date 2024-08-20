/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        port: "",
        pathname: "/cdn-cgi/image/**",
      },
    ],
  },
};

export default nextConfig;
