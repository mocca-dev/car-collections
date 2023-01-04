const withPWA = require('next-pwa')({
  dest: 'public',
});

const prod = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: prod ? false : true,
  },
});
