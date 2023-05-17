const {
  getComments,
  postComments,
  deleteComments,
} = require("../controller/comment");
const express = require("express");

const router = express.Router();

//getComments
router.get("/comments/:postId", getComments);

//postComments
router.post("/createComment/:postId", postComments);

//deleteComments
router.delete("/deleteComment/:postId/:commentId", deleteComments);

module.exports = router;
