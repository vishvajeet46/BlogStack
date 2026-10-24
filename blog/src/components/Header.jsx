import { RiMagicFill } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";

const Header = () => {
  return (
    <div className="pt-24 pb-20 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-5 border border-purple-600 bg-purple-400 rounded-full text-white">
            Find Your Next Favorite Read <RiMagicFill/>
        </div>
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold ">
            Explore the world of Blogs 😍
        </h1>
        {/* Description */}
        <p className="mt-4 text-lg md:text-xl text-gray-600">
            Explore a world of insightful, inspiring, and engaging blogs from different prespectives.
        </p>
        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full md:w-2/3 border border-gray-600">
            <input type="text" name="" id="" className="w-full px-5 py-3 text-black outline-none" placeholder="Search blogs..."/>
            <button className="px-6 bg-blue-600 py-3 text-white flex items-center gap-1 hover:bg-blue-700 cursor-pointer"><MdOutlineSearch className="text-xl"/>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
