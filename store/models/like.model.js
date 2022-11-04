import mongoose from "mongoose";
const like = mongoose.Schema(
  {
    ID_Tweet: {
      type: String,
      require: true,
      immutable: true,
    },
    Username: {
      type: String,
      require: true,
      immutable: true,
      unique:true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { strict: true }
);
export default mongoose.model("Like", like);
