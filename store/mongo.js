import mongoose from "mongoose";
export default function mongoConnection() {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect(
      "mongodb+srv://danielmartinezar_:iZKcKcnPbztXDpbs@twitter.e40qjfe.mongodb.net/?retryWrites=true&w=majority",
      connectionParams
    )
    .then(() => console.log("Db connected successfuly"))
    .catch((err) => console.log("Error connecting to db ", err));
  return { mongoConnection, mongoose };
}
