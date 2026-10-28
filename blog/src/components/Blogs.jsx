import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = [
  "All",
  "Technology",
  "Startup",
  "Liyestyle",
  "Finance",
  "Food",
];



const blogData = [
  {
    id: 1,
    title: "The Rise of Edge Computing in Modern Web Architecture",
    category: "Technology",
    desc: "Discover how edge functions and distributed networks are reducing latency and transforming user experiences across global applications.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Bootstrapping vs Venture Capital: The Founder's Dilemma",
    category: "Startup",
    desc: "A pragmatic guide to choosing the right funding path for your early-stage venture without giving away crucial equity too soon.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Designing a Daily Routine That Actually Prevents Burnout",
    category: "LifeStyle",
    desc: "Simple, science-backed habits to help you protect mental clarity, establish deep-work boundaries, and sustain creative energy.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Demystifying Index Funds: A Beginner’s Investment Roadmap",
    category: "Finance",
    desc: "Learn how low-cost index funds work, why consistency beats market timing, and how compounding builds long-term wealth.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Mastering the Art of Sourdough Bread at Home",
    category: "Food",
    desc: "Everything you need to cultivate an active starter, master fermentation times, and achieve the perfect crispy, airy crust.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Understanding Large Language Models: Beyond the Hype",
    category: "Technology",
    desc: "A clear breakdown of transformer models, vector embeddings, and what practical generative AI means for modern software engineers.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUWmGzxcDV3inm0NcaGXp5BFZOXeC3wgUL6FDdr7L-w&s=10",
  },
  {
    id: 7,
    title: "Validating Product-Market Fit with Minimal Marketing Spend",
    category: "Startup",
    desc: "Practical steps to run lightweight validation experiments, gather honest user feedback, and refine your core value proposition.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "The Minimalist Workspace: Decluttering for Maximum Focus",
    category: "LifeStyle",
    desc: "How intentional physical and digital workspace organisation eliminates decision fatigue and elevates daily productivity.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Tax-Loss Harvesting: How to Optimize Your Portfolio",
    category: "Finance",
    desc: "An actionable walkthrough on turning investment losses into valuable tax offsets while keeping your core asset allocation intact.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Regional Street Foods: Exploring Flavours Across Asia",
    category: "Food",
    desc: "A sensory journey through iconic night markets, aromatic spice blends, and the cultural history behind popular local delicacies.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    fetch("/api/user-blog-data").then((res)=>{return res.json()}).then((data)=>{
      console.log(data)
      setBlogs(data.blogData)
    })
  },[])

  const filterBlogs =
    activeCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === activeCategory);

  return (
    <div className="py-2 px-4 m-14">
      <div className="max-w-7xl mx-auto">
        {/* Categories Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Categories.map((cat) => (
            <button
              onClick={() => {
                setActiveCategory(cat);
              }}
              key={cat}
              className={`py-4 px-5 rounded-full transition cursor-pointer  ${activeCategory === cat ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-300"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {/* Blog cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
        {blogs.map((blog) => (
          <Link to={`/blog-details/${blog._id}`}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow hover:shadow-blue-200 transition h-full">
              {/* img */}
              <img
                src={`http://localhost:5000/uploads/${blog.blogImage}`}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              {/* Content */}
              <div className="p-5">
                {/* Category */}
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                {/* Title */}
                <h2 className="p-2 text-lg font-semibold">{blog.title}</h2>
                {/* Description */}
                <p className="text-sm px-2 text-gray-500">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
