import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
    // Standalone output for Docker/VPS; native serverless output for Vercel
    output: isVercel ? undefined : "standalone",
    images: {
        unoptimized: false,
    },
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "www.argrupmakine.com.tr",
                    },
                ],
                destination: "https://argrupmakine.com.tr/:path*",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
