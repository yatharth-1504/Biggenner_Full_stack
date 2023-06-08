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
  } catch (error) {
    return res.status(500).send({
      message: err.message,
    });
  }
};
