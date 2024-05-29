// Importing Post Model
const Post = require("../../model/Post");

// Using Async Await with try catch for better code readability and better error handling
exports.createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const newPost = new Post({ title, content, author });

    await newPost.save();

    res.status(200).json({ message: "Post Created Successfully" });
  } catch (e) {
    console.log(e);

    // Catching Duplicate Post Error based on title
    // 11000 is the code for duplicate Entry
    if (e.code === 11000) {
      return res.status(400).json({ message: "Post Already Created" });
    }

    res
      .status(500)
      .json({ message: "Post Cannot be Created, Please Try Again" });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Posts Not Found, Some Error Occured" });
  }
};
