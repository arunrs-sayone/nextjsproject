module.exports = {
    images: {
        remotePatterns: [
            {
              protocol: process.env.NEXT_PUBLIC_BACKEND_URL_PROTOCOL,
              hostname: process.env.NEXT_PUBLIC_BACKEND_URL_HOSTNAME,
              port: process.env.NEXT_PUBLIC_BACKEND_URL_PORT,
              // pathname: 'uploads/*',
            },
          ],
    },
  }