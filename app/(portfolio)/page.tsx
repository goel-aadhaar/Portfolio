import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}