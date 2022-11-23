/** @type {import('next').NextConfig} */

const API_KEY = '4cf85a609f260b43cf0278ad12483b46';

const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/old-example/:path*',
				destination: '/new-example/:path*',
				permanent: false,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: '/api/movies',
				destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
			},
		];
	},
};

module.exports = nextConfig;
