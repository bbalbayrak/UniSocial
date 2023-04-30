const express = require("express");
const { createPost, getPosts } = require("../controller/post");

const router = express.Router();

//GET
router.get("/allPosts", getPosts);

//POST
router.post("/createPost", createPost);

module.exports = router;
