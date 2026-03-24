import type { NextConfig } from 'next';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgPage = repo.endsWith('.github.io');
const basePath = isGithubActions && repo && !isUserOrOrgPage ? `/${repo}` : '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
