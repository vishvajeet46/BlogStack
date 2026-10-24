const blogModel = require("../models/blog");

const adminLogin = (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res
        .status(500)
        .json({ success: false, message: "Invalid Credentials..." });
    }
    res.status(200).json({ success: true, message: "Successfully Login..." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const adminCreateBlog = async (req, res) => {
  try {
    const { blogTitle, blogSubTitle, blogCategory, blogDesc, blogAction } =
      req.body;
    if (
      !blogTitle ||
      !blogSubTitle ||
      !blogCategory ||
      !blogDesc ||
      !blogAction
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required " });
    }

    const record = new blogModel({
      title: blogTitle,
      subTitle: blogSubTitle,
      description: blogDesc,
      category: blogCategory,
      publish: blogAction,
    });

    await record.save();
    res
      .status(200)
      .json({ success: true, message: "Blog insert successfully...." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const adminAllBlogData = async (req,res)=>{
  try {
    const data = await blogModel.find();
    res.status(200).json({success: true,blogData: data})
  } catch (error) {
    res.status(500).json({success: false,message: "Internal server error"})
  }
}

const adminBlogDelete = async (req,res)=>{
  try {
    const id = req.params.abc
    await blogModel.findByIdAndDelete(id)
    res.status(200).json({success: true,message:"Successfully Deleted "})
  } catch (error) {
    res.status(500).json({success: false, message: "Internal server error "})
  }
}

const adminBlogEditData = async (req,res)=>{
  try {
    const id =req.params.abc
    const data = await blogModel.findById(id)
    res.status(200).json({success:true,editData:data})
  } catch (error) {
    res.status(500).json({success: false, message: "Internal server error "})
  }
}

module.exports = {
  adminLogin,
  adminCreateBlog,
  adminAllBlogData,
  adminBlogDelete,
  adminBlogEditData,
};
