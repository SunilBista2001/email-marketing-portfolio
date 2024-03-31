"use client";
import { useRouter } from "next/navigation";
import useDataStore from "@/hooks/useData";

const Projects = ({ title, data }) => {
  const router = useRouter();

  const handleClick = (data) => {
    useDataStore.setState({ copywriting: data });

    router.push(`/copywriting/${data.id}`);
  };

  return (
    <div className="projects-container">
      <h2>{title}</h2>
      <div className="flex flex-col">
        {data &&
          data.map((project, idx) => (
            <ul key={project.id} onClick={() => handleClick(project)}>
              <li className="my-2 hover:underline cursor-pointer">
                {idx + 1 + ". " + project?.title}
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Projects;
