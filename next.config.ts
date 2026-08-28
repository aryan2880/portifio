import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // Compress output
  compress: true,
  // Disable x-powered-by header
  poweredByHeader: false,
  // Generate trailing slashes for clean URLs
  trailingSlash: true,
};

export default nextConfig;
