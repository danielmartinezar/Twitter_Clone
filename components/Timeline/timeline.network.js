import { Router } from "express";
import timelineController from "./timeline.index.js";
const router = Router();
router.get("/:username", read);

function read(req, res) {
  timelineController.read(req.params.username)
  .then((posts) => res.send(posts))
  .catch(err=>console.log("Error ",err));
}

export default router;
