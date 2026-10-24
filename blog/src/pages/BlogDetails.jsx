import { FaUserCircle } from "react-icons/fa"; 
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

//API se aayega
const blogData = {
  title: "The Rise of Edge Computing in Modern Web Architecture",
  category: "Technology",
  desc: "Discover how edge functions and distributed networks are reducing latency and transforming user experiences across global applications.",
  image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
};

const BlogDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20 px-3">
      <div className="max-w-5xl mx-auto">
        <div className="px-6 py-1.5 text-blue-500 font-bold text-center">
          Published on May 07th 2026
        </div>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {blogData.title}
        </h1>
        {/* Category */}
        <div className="flex justify-center mt-3">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm">
            {blogData.category}
          </span>
        </div>
        {/* image */}
        <div className="mt-6">
          <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full h-90 object-cover rounded-xl"
          />
        </div>
        {/* Description */}
        <h2 className="mt-6 text-xl font-semibold text-center">
          {blogData.desc}
        </h2>
        {/* Content */}
        <div className="mt-4 space-y-4 text-gray-700 leading-relaxed text-sm">
          <p>
            For over a decade, web architecture followed a predictable rhythm:
            centralise logic and database in hyperscale cloud regions (like
            us-east-1), push static assets outward to a Content Delivery Network
            (CDN), and hope international latency remained tolerable. That model
            has hit its architectural ceiling. Today’s web users demand
            sub-100-millisecond interactions, dynamic personalization, and
            instantaneous search. Centralised data centres cannot alter the
            speed of light—transmitting a request across the globe and back
            introduces unavoidable round-trip delays. Edge computing
            fundamentally redesigns this flow by running server-side logic at
            distributed Points of Presence (PoPs) directly adjacent to the end
            user.
          </p>
          <h3 className="font-medium text-2xl">
            From Dumb Caches to Programmable Nodes
          </h3>
          <h3 className="font-semibold text-base">
            Traditional CDNs (Static Caching):
          </h3>
          <p>
            Edge servers strictly cached static files (.js, .css, images).
            Dynamic API requests bypassed the CDN and went straight back to the
            central origin server.
          </p>
          <h3 className="font-semibold text-base">
            Traditional CDNs (Static Caching):
          </h3>
          <p>
            Edge servers strictly cached static files (.js, .css, images).
            Dynamic API requests bypassed the CDN and went straight back to the
            central origin server.
          </p>
          <h3 className="font-semibold text-base">
            Traditional CDNs (Static Caching):
          </h3>
          <p>
            Edge servers strictly cached static files (.js, .css, images).
            Dynamic API requests bypassed the CDN and went straight back to the
            central origin server.
          </p>
          <h3 className="font-semibold text-base">
            Traditional CDNs (Static Caching):
          </h3>
          <p>
            Edge servers strictly cached static files (.js, .css, images).
            Dynamic API requests bypassed the CDN and went straight back to the
            central origin server.
          </p>
          <h3 className="font-medium text-2xl">The Pragmatic Takeaway</h3>
          <p>
            Edge computing is not a universal replacement for standard cloud
            backends. Heavy background jobs, long-running batch data pipelines,
            and complex relational transactions still belong in centralized
            cloud regions. Instead, modern web engineering has settled on a
            hybrid continuum: central clouds handle transactional data integrity
            and complex heavy lifting, while distributed edge runtimes manage
            routing, security gates, HTML streaming, and UI delivery.
          </p>
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
          <div className="mt-10 text-center text-sm text-gray-500">Share this article on 
            <div className="flex justify-center gap-4 mt-2">
                <span className="cursor-pointer "><FaFacebook className="text-2xl text-blue-600"/></span>
                <span className="cursor-pointer "><FaInstagram className="text-2xl text-red-600"/></span>
                <span className="cursor-pointer "><FaTwitter className="text-2xl text-blue-600"/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
