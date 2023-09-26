/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    async rewrites() {
        return [
            {
                source: "/api/notion",
                destination: "https://api.notion.com/v1/pages",
            },
        ];
    },
}

module.exports = nextConfig
