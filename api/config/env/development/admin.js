module.exports = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'J8z0gjvECj2fvOBvTtbRSA=='),
      },
      url: '/dashboard',
});