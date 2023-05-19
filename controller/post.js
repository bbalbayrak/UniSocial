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
  const email = req.body.email;
  const creator = req.body.creator;

  const post = new Post({
    title: title,
    description: description,
    email: email,
    creator: creator,
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

exports.deletePost = async (req, res, next) => {
  const postId = req.params.postId;

  Post.findById(postId)
    .then((post) => {
      if (!post) {
        return res
          .status(404)
          .json({ message: "Post that you find, can not found" });
      }
    })
    .then((data) => {
      return Post.findByIdAndRemove(postId);
    })
    .then((result) =>
      res.status(200).json({ message: "Successfully Deleted !" })
    );
};

exports.updatePost = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const email = req.body.email;
  const creator = req.body.creator;

  const postId = req.params.postId;

  const post = await Post.findById(postId);

  if (!post) {
    return res.status(404).json({ message: "Post does not exist !" });
  }

  if (title === "" || description === "" || email === "" || creator === "") {
    return res.status(400).json({ message: "You have to fill the areas !" });
  }

  if (!title || !description || !email || !creator) {
    return res
      .status(400)
      .json({ message: "You cannot leave this field blank !" });
  }

  post.title = title;
  post.description = description;
  post.email = email;
  post.creator = creator;

  try {
    await post.save();
    return res
      .status(201)
      .json({ message: "Post successfully updated !", post: post });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
