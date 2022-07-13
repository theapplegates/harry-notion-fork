const { i18n } = require('./next-i18next.config');

module.exports = {
          images: {
        reactStrictMode: true,
        formats: ['image/avif', 'image/webp'],
        domains: ['applegate-paul.mo.cloudinary.net'],
    },

      experimental: {
    images: {
      allowFutureImage: true,
    },
  },

    i18n,
};
