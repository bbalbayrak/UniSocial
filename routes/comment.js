const { getComments, postComments } = require("../controller/comment");
const express = require("express");

const router = express.Router();

//getComments
router.get("/comments/:postId", getComments);

//postComments
router.post("/createComment/:postId", postComments);

module.exports = router;
