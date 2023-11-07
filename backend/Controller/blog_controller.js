const Blog = require("../Model/blog");

module.exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    });
    const blogCreated = await blog.save();
    return res.status(200).send({
      blogCreated,
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};

module.exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.status(200).send({
      blogs: blogs,
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.deleteOne({ title: req.body.title });
    return res.status(200).send({
      message: "Blog deleted successfully",
      blog,
    });
  } catch (e) {
    return res.status(500).send({
      message: "Error in deleting blog",
      message: e.message,
    });
  }
};
