import mongoose from "mongoose";
import config from "../config.js";
export default function mongoConnection() {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect(
      config.DB_URL,
      connectionParams
    )
    .then(() => console.log("Db connected successfuly"))
    .catch((err) => console.log("Error connecting to db ", err));
  return { mongoConnection, mongoose };
}
