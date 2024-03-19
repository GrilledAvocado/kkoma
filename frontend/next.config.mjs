/** @type {import('next').NextConfig} */
import path from "path";

//__dirname 선언
const __dirname = path.resolve();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chart.apis.google.com",
        port: "",
        pathname: "/chart/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "src/styles/_variables.scss"; @import "src/styles/_mixins.scss";`,
  },
};

export default nextConfig;
