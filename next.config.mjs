/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cqnokeavauxohxdkcbaq.supabase.co",
        port: "",
        pathname: "storage/v1/object/public/uploaded-images/**",
      },
    ],
  },
};

export default nextConfig;
