export default function timelineController(followController, tweetController) {
  async function read(username) {
    let following = [];
    following = await followController.readFollowing(username);
    return new Promise(async (res, rej) => {
      const tweets = await Promise.all(
        following.map(async (follow) => {
          console.log(follow);
          return await tweetController.readAll(follow.followed);
        })
      );
      const tweetsSorted = tweets.flat().sort((tweetA, tweetB) => {
        return new Date(tweetB.date) - new Date(tweetA.date);
      });
      res(tweetsSorted);
    });
  }
  //   function sortByDate(tweetA,tweetB){
  //     return new Date(tweetB.date) - new Date(tweetA.date);
  //   }
  return { read };
}
