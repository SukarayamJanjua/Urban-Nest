import express from 'express';
import {verifyToken} from "../middleware/verifyToken.js";
import { getPosts, getPost, addPost, updatePost, deletePost } from '../controllers/post.controller.js';

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/",verifyToken, addPost);

router.put("/:id", verifyToken,updatePost);

router.delete("/:id", verifyToken,deletePost);


// router.post("/test", (req, res) =>{
//     console.log("Post uploaded");
// })

// router.put("/test", (req, res) =>{
//     console.log("Post Updated");
// })

// router.delete("/test", (req, res) =>{
//     console.log("Post Deleted");
// })

export default router;