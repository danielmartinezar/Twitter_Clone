import mongoose from "mongoose";
const user = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    surnames: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: false,
    },
  },
  { strict: true }
);
export default mongoose.model("user", user);
