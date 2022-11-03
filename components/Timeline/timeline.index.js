import timelineController from "./timeline.controller.js";
import followController from "../Follow/follow.index.js";
import tweetController from "../Tweet/tweet.index.js";
export default timelineController(followController,tweetController);
