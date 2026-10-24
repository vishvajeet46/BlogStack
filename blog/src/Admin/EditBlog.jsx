import { useEffect, useRef, useState } from "react";
import UploadImage from "../assets/image-upload.png";
import Quill from "quill";
import {useParams} from "react-router-dom"

const EditBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubTitle, setBlogSubTitle] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [blogDesc, setBlogDesc] = useState("");
  const [blogAction, setBlogAction] = useState("");

  const EditorQuill = useRef(null);
  const QuillRef = useRef(null);


  const {id} = useParams()


  useEffect(() => {
    if (!QuillRef.current && EditorQuill.current) {
      QuillRef.current = new Quill(EditorQuill.current, { theme: "snow" });
    }

    QuillRef.current.on("text-change", () => {
      setBlogDesc(QuillRef.current.root.innerHTML);
    });

    if(QuillRef.current){
        QuillRef.current.root.innerHTML = blogDesc
    }

    fetch(`/api/blog-edit/${id}`).then((res)=>{return res.json()}).then((data)=>{
        console.log(data)
        setBlogTitle(data.editData.title)
        setBlogSubTitle(data.editData.subTitle)
        setBlogCategory(data.editData.category)
        setBlogAction(data.editData.publish)
        setBlogDesc(data.editData.description)
    })

  }, [blogDesc]);

  return (
    <div className="flex mt-10">
      <div className="flex-1 p-5 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Blog 🅱️</h1>
        <form
          action=""
          className="bg-white shadow-md rounded-xl p-6 max-w-5xl mx-auto space-y-6 mt-5"
        >
          
          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Blog Title
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type here..."
            value={blogTitle}
            onChange={(e) => {
              setBlogTitle(e.target.value);
            }}
          />
          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Sub Title
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type here..."
            value={blogSubTitle}
            onChange={(e) => {
              setBlogSubTitle(e.target.value);
            }}
          />
          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Category
          </label>
          <select
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setBlogCategory(e.target.value);
            }}
          >
            <option value="">--Select--</option>
            <option value="Technology">Technology</option>
            <option value="LifeStyle">LifeStyle</option>
            <option value="StartUp">StartUp</option>
            <option value="Finance">Finance</option>
            <option value="Food">Food</option>
          </select>
          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Blog Description
          </label>
          <div className="w-full h-74 pb-16 sm:pb-10 relative px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            <div ref={EditorQuill}></div>
          </div>
          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Action
          </label>
          <select
            name=""
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setBlogAction(e.target.value);
            }}
          >
            <option value="">--Select--</option>
            <option value="Publish">Publish</option>
            <option value="Unpublish">Unpublish</option>
          </select>

          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer"
            >
              Edit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
