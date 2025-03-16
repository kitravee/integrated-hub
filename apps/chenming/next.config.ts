import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
    viewTransition: true,
  },
};
const withMDX = createMDX({});
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withMDX(nextConfig));
