export default {
  jwt_secret: process.env.JWT_SECRET || 'jwt_secret',
  mongodb_uri: process.env.MONGODB_URI || 'mongodb://localhost/venode',
  app_port: process.env.PORT || 8000
}