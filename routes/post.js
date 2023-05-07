const express = require("express");
const { createPost, getPosts, deletePost } = require("../controller/post");

const router = express.Router();

//GET
router.get("/allPosts", getPosts);

//POST
router.post("/createPost", createPost);

//DELETE
router.delete("/deletePost/:postId", deletePost);

module.exports = router;
