import ProfileSection from "./sections/ProfileSection";
import ProjectsSection from "./sections/ProjectsSection";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <div className="relative w-screen h-screen manual-scroll-only">
      <div className="w-full h-full hide-scrollbar touch-scroll-control">
        <section id="profile" className="h-screen snap-start">
          <ProfileSection />
        </section>
        <section id="projects" className="h-screen snap-start">
          <ProjectsSection />
        </section>
        <section id="blog" className="h-screen snap-start">
          <BlogSection />
        </section>
        <section id="contact" className="h-screen snap-start">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}
