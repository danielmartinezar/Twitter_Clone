import bcrypt from "bcrypt";
export default function userController(userModel) {
  async function create(body) {
    let { username, password, name, surnames, email } = body;
    await bcrypt
      .hash(password, 6)
      .then((encryptedData) => (password = encryptedData));
    const data = { username, password, name, surnames, email };
    return await userModel.create([data]);
  }
  async function read(username) {
    return await userModel.find({ username: username });
  }
  async function update(data) {
    const { id, username, password, name, surnames, email } = data;
    const updatedData = { username, password, name, surnames, email };
    return await userModel.findByIdAndUpdate(id, updatedData);
  }
  async function del(id) {
    return await userModel.findByIdAndDelete(id);
  }
  return { create, read, update, del };
}
