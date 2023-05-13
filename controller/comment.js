const Post = require("../model/post");
const Comment = require("../model/comments");

exports.getComments = async (req, res, next) => {
  const postId = req.params.postId;

  const availablePost = await Post.findById(postId);

  if (!availablePost) {
    return res.status(404).json({ message: "Post does not exist !" });
  }

  if (availablePost.comments[0] === []) {
    return res.status(400).json({ message: "No comments" });
  }
  const mapComments = availablePost.comments.map((id) => {
    return id._id;
  });
  console.log(mapComments);

  const comment = await Comment.find({
    _id: { $in: mapComments },
  });

  const description = comment;
  if (!description) {
    return res.status(400).json({ message: "No Comments !" });
  }

  return res.status(200).json({ comments: comment });
};

exports.postComments = async (req, res, next) => {
  const postId = req.params.postId;
  const description = req.body.description;

  const comment = new Comment({
    description: description,
  });

  try {
    await comment.save();
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post does not exist !" });
    }

    post.comments.push(comment);
    await post.save();
    return res
      .status(201)
      .json({ message: "Comment Successfully Created !", comment: comment });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
