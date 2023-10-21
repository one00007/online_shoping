/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        })

        return config
    },
    // redirects: async () => {
    //     return [
    //         {
    //             source: '/about',
    //             destination: '/',
    //             permanent: true,
    //         },
    //     ]
    // },
}

module.exports = nextConfig
