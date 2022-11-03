import mongoose from "mongoose";
const tweet = mongoose.Schema(
  {
    author: {
      type: String,
      require: true,
      immutable: true,
    },
    body: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      require: true,
      default: Date.now(),
      immutable: true,
    },
  },
  { strict: true }
);
export default mongoose.model("Tweet", tweet);
