const express = require("express");
const router = express.Router();

const blogController = require("../Controller/blog_controller");

router.post("/createblog", blogController.createBlog);
router.get("/getblogs", blogController.getBlogs);

module.exports = router;
