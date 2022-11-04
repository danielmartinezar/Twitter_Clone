import dotenv from "dotenv";
dotenv.config();
export default {
  APP_PORT: process.env.APP_PORT || 8081,
  DB_URL:
    process.env.DB_URL ||
    "mongodb+srv://danielmartinezar_:iZKcKcnPbztXDpbs@twitter.e40qjfe.mongodb.net/?retryWrites=true&w=majority",
};
