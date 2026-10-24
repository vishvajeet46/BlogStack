import { useState } from "react";

const blogComments = [
  {
    id: 1,
    blog: "Introduction to Web Development",
    username: "Rahul",
    comment: "Great article! It helped me understand web development basics.",
    commentDate: "2026-10-18",
    approved: true,
  },
  {
    id: 2,
    blog: "Introduction to Mobile Development",
    username: "Priya",
    comment: "Very informative blog. Looking forward to more articles!",
    commentDate: "2026-10-19",
    approved: false,
  },
];
const Comments = () => {
  const [activeTab, setActiveTab] = useState("approved");
  const filteredComments = blogComments.filter((data)=>activeTab === "approved" ? data.approved : !data.approved)

  return (
    <div className="p-3 bg-gray-100 min-h-screen mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl text-gray-800 font-bold">Comments</h1>
        {/* Tabs */}
        <div className="flex gap-4">
          <button
            className={`px-5 py-1 rounded-full border cursor-pointer ${activeTab === "approved" ? "border-blue-500 text-blue-600 " : "border-gray-400 text-gray-500"}`}
            onClick={() => {
              setActiveTab("approved");
            }}
          >
            Approved
          </button>
          <button
            className={`px-5 py-1 rounded-full border cursor-pointer ${activeTab === "notApproved" ? "border-blue-500 text-blue-600 " : "border-gray-400 text-gray-500"}`}
            onClick={() => {
              setActiveTab("notApproved");
            }}
          >
            Not Approved
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="grid grid-cols-2 font-semibold text-gray-600 mb-4">
          <p>Blog Title & Comments</p>
          <p>Action</p>
        </div>
        <div className="space-y-6">
            {
                filteredComments.map((item)=>(
                    <div key={item.id} className="grid grid-cols-2 items-start border border-gray-300 p-5 rounded-2xl">
                        <div>
                            <p>Blog : {item.blog}</p>
                            <div className="border border-blue-300 p-2 rounded-2xl mt-2">
                            <p className="font-medium">
                                <span>Name : {item.username}</span>
                            </p>
                            <p className="font-medium">Comment : {item.comment}</p>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-4">
                            <button className="">
                                {item.approved ? "Approved" : "Approve"}
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Comments;
