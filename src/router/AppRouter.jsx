import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import { ProjectDetail } from "../pages/Projects/ProjectDetail";
import BlogIndex from "../pages/Blog/BlogIndex";
import BlogArticle from "../pages/Blog/BlogArticle";
import NotFound from "../pages/NotFound";
import ProjectIndex from "../pages/Projects/ProjectIndex";
import { ScrollProvider } from "../Context/ScrollContext";

export default function AppRouter() {
  return (
    <Router>
      <ScrollProvider>
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
            path="/projects"
            element={
              <MainLayout navbarType="project-index">
                <ProjectIndex />
              </MainLayout>
            }
          />
          <Route
            path="/projects/:projectId"
            element={
              <MainLayout navbarType="project-detail">
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
      </ScrollProvider>
    </Router>
  );
}
