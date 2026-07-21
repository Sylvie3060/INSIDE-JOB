/** @type {import('next').NextConfig} */
// This prototype has no server-side dependencies, so it can be exported as a
// portable static website and deployed to CloudBase / any static host.
const nextConfig = {
  output: "export",
};
export default nextConfig;
