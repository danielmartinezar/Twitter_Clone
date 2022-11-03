import followController from "./follow.index.js";
import { Router } from "express";

const router = Router();
router.get("/followers/:username", readFollowers);
router.get("/following/:username", readFollowing);
router.post("/", create);
router.delete("/:id", del);

function create(req, res) {
  followController
    .create(req.body)
    .then((data) => {
      res.send(data);
      console.log("Inserted successfuly");
    })
    .catch((err) => console.log("Error ", err));
}
function readFollowers(req, res) {
  followController
    .readFollowers(req.params.username)
    .then((data) => {
      res.send(data);
      console.log("Data read correctly");
    })
    .catch((err) => console.log("Error Date read incorrectly ", err));
}
function readFollowing(req, res) {
  followController
    .readFollowing(req.params.username)
    .then((data) => {
      res.send(data);
      console.log("Data read correctly");
    })
    .catch((err) => console.log("Error Date read incorrectly ", err));
}

function del(req, res) {
  followController
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
