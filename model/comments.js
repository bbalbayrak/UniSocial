const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
