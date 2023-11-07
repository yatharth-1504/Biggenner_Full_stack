const express = require("express");
const router = express.Router();

const blogController = require("../Controller/blog_controller");

router.post("/createblog", blogController.createBlog);
router.get("/getblogs", blogController.getBlogs);
router.post("/deleteblog", blogController.deleteBlog);

module.exports = router;
