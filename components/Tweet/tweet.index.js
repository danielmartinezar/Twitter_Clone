import tweetController from "./tweet.controller.js";
import likeController from "../Like/like.index.js";
import tweetModel from "../../store/models/tweet.model.js";
export default tweetController(tweetModel,likeController);