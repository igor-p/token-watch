import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
      },
    ],
  },
}

export default nextConfig
