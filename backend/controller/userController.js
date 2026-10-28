const blogModel = require("../models/blog");

const userBlogData = async (req, res) => {
  try {
    const data = await blogModel.find({ publish: "Publish" });
    res.status(200).json({ success: true, blogData: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error " });
  }
};

const userBlogDetails = async (req, res) => {
  try {
    const id = req.params.abc;
    const data = await blogModel.findById(id);
    res.status(200).json({ success: true, blog: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error " });
  }
};

module.exports = {
  userBlogData,
  userBlogDetails,
};
