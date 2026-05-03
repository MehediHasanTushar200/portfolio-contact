
const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? "/geeky-nextjs" : "";

const nextConfig = {
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
