/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.google.com",
      "encrypted-tbn0.gstatic.com",
      "unsplash.com",
      "plus.unsplash.com",
      "images.unsplash.com",
      "thumbs.dreamstime.com",
      "images.oyoroomscdn.com",
      "media.istockphoto.com",
      "i.pinimg.com",
      "www.symbols.com",
      "cdn.pixabay.com",
    ],
  },
};

module.exports = nextConfig;
