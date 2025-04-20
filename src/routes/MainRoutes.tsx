
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Books from "@/pages/Books";
import Journals from "@/pages/Journals";
import About from "@/pages/About";
import News from "@/pages/News";
import Services from "@/pages/Services";
import NotFound from "@/pages/NotFound";
import AdminLayout from "@/components/layout/AdminLayout";
import UserLayout from "@/components/layout/UserLayout";
import AdminDashboard from "@/pages/admin/Dashboard";
import UserDashboard from "@/pages/user/Dashboard";

const MainRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="books" element={<AdminDashboard />} />
        <Route path="users" element={<AdminDashboard />} />
      </Route>

      {/* Author routes */}
      <Route path="/author" element={<UserLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="submissions" element={<UserDashboard />} />
        <Route path="profile" element={<UserDashboard />} />
      </Route>

      {/* Reviewer routes */}
      <Route path="/reviewer" element={<UserLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="reviews" element={<UserDashboard />} />
        <Route path="profile" element={<UserDashboard />} />
      </Route>

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
