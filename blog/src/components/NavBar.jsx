import { Link } from "react-router-dom";
import { MdArrowCircleRight } from "react-icons/md";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* logo */}
          <div className="text-2xl font-bold text-blue-600">BlogStack</div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link className="hover:text-blue-600">Home</Link>
            <Link className="hover:text-blue-600">Blogs</Link>
            <Link className="hover:text-blue-600">About</Link>
            <Link className="hover:text-blue-600">Contact</Link>
          </div>
          {/* Admin */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-indigo-500 px-10 py-2 text-white">
              Admin Login
              <MdArrowCircleRight className="text-xl" />
            </button>
          </div>

          {/* Mobile Menu Button*/}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <MdCancel className="text-2xl text-red-600" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow-md">
          <Link className="hover:text-blue-600 block">Home</Link>
          <Link className="hover:text-blue-600 block">Blogs</Link>
          <Link className="hover:text-blue-600 block">About</Link>
          <Link className="hover:text-blue-600 block">Contact</Link>
          <button className=" flex justify-center items-center w-full rounded-4xl text-sm bg-indigo-500 px-10 py-2.5 gap-2 text-white">
            Admin Login <MdArrowCircleRight className="text-2xl"/>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
