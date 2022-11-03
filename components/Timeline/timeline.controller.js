export default function timelineController(followController, tweetController) {
  function read(username) {
    let following = [];
    followController.readFollowing(username).then((userFollowing) => {
      following = userFollowing;
    });
    return new Promise((res, rej) => {
      let posts = [];
      following.map((follow) => {
        tweetController.read(follow.followed).then((userPosts) => {
          posts.push(userPosts);
        });
      });
      res(posts)
    });
  }
  return { read };
}
