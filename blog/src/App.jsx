import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BlogDetails from "./pages/BlogDetails";
import AdminLogin from "./Admin/AdminLogin";
import AdminLayout from "./Admin/AdminLayout";
import Dashboard from "./Admin/Dashboard";
import Allblogs from "./Admin/Allblogs";
import CreateBlog from "./Admin/CreateBlog";
import "quill/dist/quill.snow.css"
import Comments from "./Admin/Comments";
import EditBlog from "./Admin/EditBlog";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/blogs"
            element={
              <AdminLayout>
                <Allblogs />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/create"
            element={
              <AdminLayout>
                <CreateBlog />
              </AdminLayout>
            }
          />
          <Route path="/admin/comments"
          element={
            <AdminLayout>
              <Comments/>
            </AdminLayout>
          }/>
          <Route path="/admin/edit-blog/:id" 
          element={
            <AdminLayout>
              <EditBlog/>
            </AdminLayout>
          }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
