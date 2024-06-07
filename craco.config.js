
/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/commons': path.resolve(__dirname, 'src/commons'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/containers': path.resolve(__dirname, 'src/containers'),
      '@/elements': path.resolve(__dirname, 'src/elements'),
      '@/layouts': path.resolve(__dirname, 'src/layouts'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
    }
  },
}
