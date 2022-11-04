export default function likeController(likeModel) {
  async function create(like) {
    return await likeModel.create([like]);
  }
  async function read(likeID) {
    return await likeModel.findById(likeID);
  }
  async function readAll(tweetID) {
    return await likeModel.find({ ID_Tweet: tweetID });
  }
  async function del(id) {
    return await likeModel.findByIdAndDelete(id);
  }
  async function delAll(tweetID) {
    return await likeModel.deleteMany({ ID_Tweet: tweetID });
  }
  return { create, read, readAll, del, delAll };
}
