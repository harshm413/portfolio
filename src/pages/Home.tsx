import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LeetCodeWidget from "@/components/LeetCodeWidget";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-24 pb-12">
        <Hero />
        <section id="about" className="flex flex-col gap-8">
          <About />
          <div id="leetcode"><LeetCodeWidget /></div>
        </section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="blogs"><Blogs /></section>
        <section id="education"><Education /></section>
        <section id="certifications"><Certifications /></section>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}
