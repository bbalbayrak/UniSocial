const express = require("express");
const {
  createPost,
  getPosts,
  deletePost,
  updatePost,
} = require("../controller/post");

const router = express.Router();

//GET
router.get("/allPosts", getPosts);

//POST
router.post("/createPost", createPost);

//DELETE
router.delete("/deletePost/:postId", deletePost);

//UPDATE
router.put("/updatePost/:postId", updatePost);

module.exports = router;
