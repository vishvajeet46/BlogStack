const blog = require("express").Router()
const adminC = require("../controller/adminController")



blog.post("/login",adminC.adminLogin)

blog.post("/create-blog",adminC.adminCreateBlog)

blog.get("/get-allBlogs",adminC.adminAllBlogData)

blog.delete("/blogdelete/:abc",adminC.adminBlogDelete)

blog.get("/blog-edit/:abc",adminC.adminBlogEditData)


module.exports = blog