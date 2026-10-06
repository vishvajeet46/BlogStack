import { RiMagicFill } from "react-icons/ri";

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
      </div>
    </div>
  )
}

export default Header
