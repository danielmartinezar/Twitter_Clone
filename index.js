import express from "express";
import usersRoute from "./components/User/user.network.js";
import tweetRoute from "./components/Tweet/tweet.network.js";
import followRoute from "./components/Follow/follow.network.js";
import timeline from "./components/Timeline/timeline.network.js";
import mongoDb from "./store/mongo.js";
mongoDb().mongoConnection;
const app = express();

app.use(express.json());
app.use("/users", usersRoute);
app.use("/tweet", tweetRoute);
app.use("/follow", followRoute);
app.use("/timeline",timeline)
app.listen(8080, () => console.log("Listening on port 8080"));
