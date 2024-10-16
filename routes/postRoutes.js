const postController = require("../controllers/postController");
const auth = require("../utils/auth");
const express = require("express");
const postRouter = express.Router();

postRouter.post("/", auth.checkAuth, postController.createPost);
postRouter.get("/", auth.checkAuth, postController.getAllPost);
postRouter.get("/:id", auth.checkAuth, postController.getPostById);
postRouter.put("/:id", auth.checkAuth, postController.updatePost);
postRouter.delete("/:id", auth.checkAuth, postController.deletePost);

module.exports = postRouter;
