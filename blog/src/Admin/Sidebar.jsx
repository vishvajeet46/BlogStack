import { Link } from "react-router-dom";
import { IoIosExit } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-700 text-white p-5 mt-12 ">
      <h2 className="text-2xl font-bold mb-6 ">Admin Panel</h2>
      <ul className="space-y-6">
        <li className="hover:text-blue-500 hover:bg-blue-50 hover:p-2 hover:rounded">
          <Link to={"/admin"}>Dashboard</Link>
        </li>
        <li className="hover:text-blue-500 hover:bg-blue-50 hover:p-2 hover:rounded">
          <Link to={"/admin/blogs"}>Manage Blogs</Link>
        </li>
        <li className="hover:text-blue-500 hover:bg-blue-50 hover:p-2 hover:rounded">
          <Link to={"/admin/comments"}>Comments</Link>
        </li>
        <li className="hover:text-blue-500 hover:bg-blue-50 hover:p-2 hover:rounded">
          <Link>
            Exit <IoIosExit className="inline text-red-600 text-2xl"/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
