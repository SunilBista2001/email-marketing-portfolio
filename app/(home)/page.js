import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { projectData, caseStudyData } from "@/components/data";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Projects title={"Flows and Strategy"} data={projectData} />
        <Projects title={"Case Study"} data={caseStudyData} />
        <Contact />
      </div>
    </>
  );
}
