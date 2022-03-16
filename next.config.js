
module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  src: "/api/(.*)",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Credentials": "true"
  },
  continue: true
}

