const Post = require("../models/post");
const Comment = require("../models/comments");
const postController = {
  createPost: async (req, res) => {
    try {
      const { description } = req.body;
      if (!description) {
        return res.status(400).json({ message: "Description is required..." });
      }

      const newPost = new Post({
        description,
        user: req.userId,
      });
      await newPost.save();
      res.status(201).json({ message: "Post Created Successfully..." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAllPost: async (req, res) => {
    try {
      const posts = await Post.find()
        .populate("user")
        .populate("comments")
        .sort({ createdAt: -1 });
      res.status(200).json({ posts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id)
        .populate("user")
        .populate("comments");
      if (!post) {
        return res.status(404).json({ message: "Post not Found..." });
      }
      res.status(200).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      if (!description) {
        return res.status(400).json({ message: "Description is required..." });
      }
      console.log(id);
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({ message: "Post not Found..." });
      }

      post.description = description;
      post.updatedAt = new Date();
      await post.save();
      res.status(200).json({ message: "Post updated Successfully..." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({ message: "Post not Found..." });
      }

      await Post.findByIdAndDelete(id);
      res.status(200).json({ message: "Post Deleted Successfully..." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = postController;
