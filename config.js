import dotenv from "dotenv";
dotenv.config();
export default {
  PORT: process.env.PORT || 8081,
  DB_URL:
    process.env.DB_URL ||
    "mongodb+srv://danielmartinezar_:iZKcKcnPbztXDpbs@twitter.e40qjfe.mongodb.net/Twitter?retryWrites=true&w=majority",
};
