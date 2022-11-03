import tweetController from "./tweet.index.js";
import { Router } from "express";

const router = Router();
router.get("/:author", read);
router.post("/", create);
router.patch("/", update);
router.delete("/:id", del);

function create(req, res) {
  tweetController
    .create(req.body)
    .then((data) => {
      res.send(data);
      console.log("Inserted successfuly");
    })
    .catch((err) => console.log("Error ", err));
}
function read(req, res) {
  tweetController
    .read(req.params.author)
    .then((data) => {
      res.send(data);
      console.log("Data read correctly");
    })
    .catch((err) => console.log("Error Date read incorrectly ", err));
}
function update(req, res) {
  tweetController
    .update(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Error updating the document ", err);
    });
}
function del(req, res) {
  tweetController
    .del(req.params.id)
    .then((data) => {
      res.send(data);
      console.log("Document deleted successfuly");
    })
    .catch((err) => {
      console.log("Error deleting document ", err);
    });
}

export default router;
