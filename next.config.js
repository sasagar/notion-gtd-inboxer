/** @type {import('next').NextConfig} */
const { version } = require('./package.json');

const nextConfig = {
    reactStrictMode: false,
    publicRuntimeConfig: {
        version,
    },
}

module.exports = nextConfig
