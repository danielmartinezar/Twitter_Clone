export default function followController(followModel) {
  async function create(data) {
    return await followModel.create([data]);
  }
  async function readFollowers(username) {
    return await followModel.find({ followed: username }).select("follower");
  }
  async function readFollowing(username) {
    return await followModel.find({ follower: username }).select("followed");
  }

  async function del(id) {
    return await followModel.findByIdAndDelete(id);
  }
  return { create, readFollowers, readFollowing, del };
}
