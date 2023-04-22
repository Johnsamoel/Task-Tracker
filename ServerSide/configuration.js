require("dotenv").config();
const requiredEnvs = ["DATABASE_NAME","DATABASE_USERNAME","DATABASE_PASSWORD","HASHING_SALT_ROUND","JWT_SECRET"];
requiredEnvs.forEach((env) => {
  if (!process.env[env]) {
    console.error(`${env} variable is required"`);
    process.exit();
  }
});
module.exports = {
    DB_NAME:process.env.DATABASE_NAME,
    DB_USERNAME:process.env.DATABASE_USERNAME,
    DB_PASSWORD:process.env.DATABASE_PASSWORD,
    HASHING_SALTROUND:process.env.HASHING_SALT_ROUND,
    JWT_SECRET:process.env.JWT_SECRET

};