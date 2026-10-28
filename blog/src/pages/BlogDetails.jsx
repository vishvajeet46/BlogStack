import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify"

//API se aayega
const blogData = {
  title: "The Rise of Edge Computing in Modern Web Architecture",
  category: "Technology",
  desc: "Discover how edge functions and distributed networks are reducing latency and transforming user experiences across global applications.",
  image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
};

const BlogDetails = () => {
  const { id } = useParams();
  
  const [blogs,setBlogs] = useState([])

  useEffect(() => {
    fetch(`/api/blog-details-pages/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setBlogs(data.blog)
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-20 px-3">
      <div className="max-w-5xl mx-auto">
        <div className="px-6 py-1.5 text-blue-500 font-bold text-center">
          Published on May 07th 2026
        </div>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {blogs.title}
        </h1>
        {/* Category */}
        <div className="flex justify-center mt-3">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm">
            {blogs.category}
          </span>
        </div>
        {/* image */}
        <div className="mt-6">
          <img
            src={`http://localhost:5000/uploads/${blogs.blogImage}`}
            alt={blogs.title}
            className="w-full h-90 object-cover rounded-xl"
          />
        </div>
        {/* Description */}
        <h2 className="mt-6 text-xl font-semibold text-center">
          {blogs.subTitle}
        </h2>
        {/* Content */}
        <div className="mt-4 space-y-4 text-gray-700 leading-relaxed text-sm">
            <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(blogs.description)}}>
            </div>
            
          <div className="my-8 border-t"></div>

          {/* Comment Section */}
          <div>
            {/* Comment Box */}
            <h3 className="font-semibold mb-4">Add Your Comments</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Name..."
              className="w-full border border-gray-400 rounded-md p-3 outline-none text-sm mb-4"
            />
            <textarea
              name=""
              id=""
              placeholder="Add a comment..."
              className="w-full border border-gray-400 rounded-md p-3 outline-none text-sm mb-4"
            ></textarea>
            <button className="px-5 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
              Submit
            </button>
            {/* Comment List */}
            <div className="mt-6 space-y-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <FaUserCircle className="text-gray-400 text-2xl " />
                <p className="text-sm font-semibold">Vishvajeet</p>
                <p className="text-xs text-gray-500">2 Hours ago</p>
                <p className="mt-2 text-sm">This blog is really helpful</p>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="mt-10 text-center text-sm text-gray-500">
            Share this article on
            <div className="flex justify-center gap-4 mt-2">
              <span className="cursor-pointer ">
                <FaFacebook className="text-2xl text-blue-600" />
              </span>
              <span className="cursor-pointer ">
                <FaInstagram className="text-2xl text-red-600" />
              </span>
              <span className="cursor-pointer ">
                <FaTwitter className="text-2xl text-blue-600" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
