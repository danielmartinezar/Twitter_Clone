import config from "./config.js";
import express from "express";
import cors from "cors";

import usersRoute from "./components/User/user.network.js";
import tweetRoute from "./components/Tweet/tweet.network.js";
import followRoute from "./components/Follow/follow.network.js";
import timelineRoute from "./components/Timeline/timeline.network.js";
import likeRoute from "./components/Like/like.network.js";
import mongoDb from "./store/mongo.js";

//Connecting to mongo
mongoDb().mongoConnection;
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.use("/users", usersRoute);
app.use("/tweet", tweetRoute);
app.use("/follow", followRoute);
app.use("/timeline", timelineRoute);
app.use("/like", likeRoute);

app.listen(config.APP_PORT, () =>
  console.log(`Listening on port ${config.PORT}`)
);
