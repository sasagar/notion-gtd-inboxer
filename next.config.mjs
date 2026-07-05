import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
    swSrc: "app/sw.js",
    swDest: "public/sw.js",
    // Disable the service worker in development so it doesn't interfere with HMR.
    disable: process.env.NODE_ENV === "development",
    reloadOnOnline: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false,
};

export default withSerwist(nextConfig);
