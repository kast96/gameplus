/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['st.kp.yandex.net', 'avatars.mds.yandex.net'],
  },
}

module.exports = nextConfig
