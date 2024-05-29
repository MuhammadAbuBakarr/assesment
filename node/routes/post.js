const express = require("express");
const router = express.Router();

// Importing Controllers
const { createPost, getPosts } = require("../controller/Post/controller");

router.post("/posts", createPost);
router.get("/posts", getPosts);

// Exporting Router Instance
module.exports = router;
