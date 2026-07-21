/** @type {import('next').NextConfig} */
// This prototype has no server-side dependencies, so it can be exported as a
// portable static website and deployed to CloudBase / any static host.
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryBasePath = "/INSIDE-JOB";

const nextConfig = {
  output: "export",
  // GitHub Pages hosts project repositories under /<repository-name>.
  // Keep the local and EdgeOne deployments at the root URL.
  ...(isGitHubPages
    ? { basePath: repositoryBasePath, assetPrefix: repositoryBasePath }
    : {}),
};
export default nextConfig;
