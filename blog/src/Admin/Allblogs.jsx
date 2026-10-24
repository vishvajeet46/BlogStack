import { useState } from "react";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { HiCheckCircle, HiPencil, HiTrash } from "react-icons/hi";
import { MdUnpublished } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Allblogs = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/api/get-allBlogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setBlog(data.blogData);
        } else {
          toast.error(data.message);
        }
      });
  }, [blog]);

  function handleDelete(id) {
    fetch(`/api/blogdelete/${id}`, { method: "DELETE" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      });
  }

  return (
    <div className="flex-1 bg-gray-100 min-h-screen mt-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-gray-800 inline-block ">
          Manage Blogs 🅱️
        </h1>
        <Link to={"/admin/create"}>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            {" "}
            <FaPlus className="inline pb-1 mr-2" />
            Add Blog
          </button>
        </Link>
      </div>

      <div className=" bg-white mt-6 mx-4 rounded-xl shadow-gray-200">
        <div className="p-3 md:p-5">
          <h1 className="text-xl md:text-2xl font-semibold ">All Blogs</h1>
          <p className=" text-sm">Manage and monitor your blog posts</p>
        </div>

        <div className="relative overflow-x-auto shadow-xs rounded-base ">
          <table className="w-full text-sm text-left">
            <thead className="text-sm text-white bg-gray-800 ">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  S.No.
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Blog Title
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            {blog.map((item, index) => (
              <tbody key={index}>
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 font-semibold">{index + 1}</td>
                  <td className="px-6 py-4 font-semibold">{item.title}</td>
                  <td className="px-6 py-4">
                    {item.publish === "Publish" ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <HiCheckCircle className="w-4 h-4 mr-1" />
                        {item.publish}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <MdUnpublished className="w-4 h-4 mr-1" />
                        {item.publish}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Link to={`/admin/edit-blog/${item._id}`}>
                        <button className="flex items-center gap-1 px-3 py-1.5 border border-yellow-300 rounded-md text-yellow-700 hover:bg-yellow-100 transition duration-150 text-xs font-medium cursor-pointer">
                          <HiPencil className="w-4 h-4" />
                          Edit
                        </button>
                      </Link>
                      <button
                        className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-red-100 transition duration-150 text-xs font-medium cursor-pointer"
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                      >
                        <HiTrash className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Allblogs;
