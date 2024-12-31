import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import ProjectDetail from "../pages/Projects/ProjectDetail";
import BlogIndex from "../pages/Blog/BlogIndex";
import BlogArticle from "../pages/Blog/BlogArticle";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout navbarType="home">
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <MainLayout navbarType="project">
              <ProjectDetail />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout navbarType="blog">
              <BlogIndex />
            </MainLayout>
          }
        />
        <Route
          path="/blog/:articleId"
          element={
            <MainLayout navbarType="home">
              <BlogArticle />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout navbarType="home">
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";

// // Pages
// import Home from "../pages/Home/Home";
// import ProjectDetail from "../pages/Projects/ProjectDetail";
// import BlogIndex from "../pages/Blog/BlogIndex";
// import BlogArticle from "../pages/Blog/BlogArticle";
// import NotFound from "../pages/NotFound";

// export default function AppRouter() {
//   return (
//     <Router>
//       <MainLayout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects/:projectId" element={<ProjectDetail />} />
//           <Route path="/blog" element={<BlogIndex />} />
//           <Route path="/blog/:articleId" element={<BlogArticle />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </MainLayout>
//     </Router>
//   );
// }
