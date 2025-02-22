import ProjectTile from "@/components/project-tile";
import { PortfolioData } from "@/libs/types";
import { getMarkup } from "@/libs/utils";
import React from "react";

const PortfolioPage = () => {
  const headerData = getMarkup("content/portfolio", "index.md");

  console.log(headerData.data);

  if (!headerData) {
    return <p>Niestety nie udało się załadować strony</p>;
  }

  const data = headerData.data as PortfolioData;

  return (
    <main className="p-5">
      <div>
        <h1>{data.title}</h1>
        {data.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto">
        {data.projects.map((project, index) => (
          <ProjectTile project={project} key={`${project.title}_${index}`} />
        ))}
      </div>
    </main>
  );
};

export default PortfolioPage;
