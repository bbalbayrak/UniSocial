const Post = require("../model/post");

exports.getPosts = async (req, res, next) => {
  const post = await Post.find();

  return res
    .status(200)
    .json({ message: "Posts Successfully Fetched!", post: post });
};

exports.createPost = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const faculty = req.body.faculty;

  const post = new Post({
    title: title,
    description: description,
    faculty: faculty,
  });

  try {
    await post.save();

    return res
      .status(201)
      .json({ message: "Post Successfully Created !", post: post });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
