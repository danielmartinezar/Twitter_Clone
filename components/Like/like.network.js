import likeController from "./like.index.js";
import { Router } from "express";

const router = Router();
router.get("/:id", read);
router.get("/", readAll);
router.post("/", create);
router.delete("/:id", del);
router.delete("/:tweetId", delAll);


function create(req, res) {
  likeController
    .create(req.body)
    .then((data) => {
      res.send(data);
      console.log("Inserted successfuly");
    })
    .catch((err) => console.log("Error ", err));
}
function read(req, res) {
  likeController
    .read(req.params.id)
    .then((data) => {
      res.send(data);
      console.log("Data read correctly");
    })
    .catch((err) => console.log("Error Date read incorrectly ", err));
}
function readAll(req, res) {
    likeController
      .readAll(req.body.tweetID)
      .then((data) => {
        res.send(data);
        console.log("Data read correctly");
      })
      .catch((err) => console.log("Error Date read incorrectly ", err));
  }
function del(req, res) {
  likeController
    .del(req.params.id)
    .then((data) => {
      res.send(data);
      console.log("Document deleted successfuly");
    })
    .catch((err) => {
      console.log("Error deleting document ", err);
    });
}
function delAll(req, res) {
    likeController
      .delAll(req.params.tweetId)
      .then((data) => {
        res.send(data);
        console.log("Document deleted successfuly");
      })
      .catch((err) => {
        console.log("Error deleting document ", err);
      });
  }

export default router;
