const blog = require("express").Router()
const adminC = require("../controller/adminController")
const userC = require("../controller/userController")
const uploads = require("../middleware/multer")


blog.post("/login",adminC.adminLogin)

blog.post("/create-blog",uploads.single("image"),adminC.adminCreateBlog)

blog.get("/get-allBlogs",adminC.adminAllBlogData)

blog.delete("/blogdelete/:abc",adminC.adminBlogDelete)

blog.get("/blog-edit/:abc",adminC.adminBlogEditData)

blog.put("/blog-update/:abc",adminC.adminBlogUpdate)

blog.get("/user-blog-data",userC.userBlogData)

blog.get("/blog-details-pages/:abc",userC.userBlogDetails)


module.exports = blog