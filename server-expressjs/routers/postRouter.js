import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);

router.post("/", createPost);

router.put("/", updatePost);
// router.post("/update", updatePost);

export default router;
