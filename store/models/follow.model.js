import mongoose from "mongoose";
const follow = mongoose.Schema(
  {
    follower: {
      type: String,
      require: true,
      immutable: true,
    },
    followed: {
      type: String,
      require: true,
      immutable: true,
    },
    Date: {
      type: Date,
      default: Date.now(),
      immutable: true,
    },
  },
  { strict: true }
);
export default mongoose.model("Follow", follow);
