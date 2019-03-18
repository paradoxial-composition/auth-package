module.exports = {
  port: process.env.PORT || 8081,
  portAPI: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'userdb', // shopsapp
    user: process.env.DB_USER || 'userdb',
    password: process.env.DB_PASS || 'userdb',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './userdb.sqlite' // shopsapp.sqlite
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret' // secret only known by the server used to determine if the jwt toekn is valid or not
    // if any tries to send a bad token the server will know something is fishy cuz them niggas dont have the secret
  }
}
