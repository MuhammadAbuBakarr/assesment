const mongoose = require("mongoose");

// Importing DTO Helper
const postValidator = require("../helpers/validation");

// Defining Mongoose Schema
const postSchema = new mongoose.Schema({
  // Title Should be unique to handle bulk requests with same payload
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: [true, "Post Already Created"],
    validate: postValidator("Title"),
  },
  content: {
    type: String,
    required: [true, "Content is required"],
    validate: postValidator("Content"),
  },
  author: {
    type: String,
    required: [true, "Author is required"],
    validate: postValidator("Author"),
  },
});

const Post = mongoose.model("Post", postSchema);

// Export Model Instance
module.exports = Post;
