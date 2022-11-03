import userController from "../User/user.index.js";
export default function tweetController(tweetModel) {
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
  async function read(author) {
    return await tweetModel.find({ author: author });
  }
  async function update(id, tweetBody) {
    return await tweetModel.findByIdAndUpdate(id, tweetBody);
  }
  async function del(id) {
    return await tweetModel.findByIdAndDelete(id);
  }
  return { create, read, update, del };
}
