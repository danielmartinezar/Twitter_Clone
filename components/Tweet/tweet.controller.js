import userController from "../User/user.index.js";
export default function tweetController(tweetModel, likeController) {
  function create(tweet) {
    return new Promise((res, rej) => {
      userController.read(tweet.author).then(async (data) => {
        if (data.length > 0) {
          res(await tweetModel.create([tweet]));
        }
        rej(new Error("User not found!"));
      });
    });
  }
  async function read(tweetID) {
    return new Promise(async (res) => {
      let tweet = []
      tweet.push(await tweetModel.findById(tweetID));
      console.log(tweet);
      const likes = await likeController.readAll(tweetID);
      res([tweet, likes]);
    });
  }
  async function readAll(author) {
    return await tweetModel.find({ author: author });
  }

  async function update(tweetInfo) {
    const {tweetId} = tweetInfo;
    return await tweetModel.findByIdAndUpdate(tweetId, tweetInfo);
  }
  async function del(id) {
    await likeController.delAll(id);
    return await tweetModel.findByIdAndDelete(id);
  }
  return { create, read, readAll, update, del };
}
