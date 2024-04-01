import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Result from "@/components/Result";
import { caseStudyData } from "@/components/data";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Result />
        <About />

        <Projects title={"Case Study"} data={caseStudyData} />
        <Contact />
      </div>
    </>
  );
}
