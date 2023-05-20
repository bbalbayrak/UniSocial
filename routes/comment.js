const {
  getComments,
  postComments,
  deleteComments,
  updateComment,
} = require("../controller/comment");
const express = require("express");

const router = express.Router();

//getComments
router.get("/comments/:postId", getComments);

//postComments
router.post("/createComment/:postId", postComments);

//deleteComments
router.delete("/deleteComment/:postId/:commentId", deleteComments);

//updateComments
router.put("/updateComment/:postId/:commentId", updateComment);

module.exports = router;
