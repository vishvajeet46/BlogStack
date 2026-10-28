import { LiaBlogger } from "react-icons/lia";
import { FaCommentAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Dashboard = () => {

  const [blog,setBlog] = useState([])

  useEffect(()=>{
    fetch("/api/get-allBlogs").then((res)=>{return res.json()}).then((data)=>{
      if (data.success){
        setBlog(data.blogData)
      }else{
        toast.error(data.message)
      }
    })
  },[blog])

  return (
    <div className="mt-12">
      <h1 className="text-2xl font-bold mb-6 ">Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
            <LiaBlogger className="text-5xl text-blue-400"/>
            <h2 className="font-semibold">Total Blogs</h2>
            <p className="text-2xl font-bold text-blue-700">{blog.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaCommentAlt className="text-4xl text-blue-400"/>
            <h2 className="font-semibold">Comments</h2>
            <p className="text-2xl font-bold text-blue-700">142</p>
        </div>
        
      </div>
    </div>
  )}
export default Dashboard
