import React from "react";

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const slug = (await params).slug;
  return <div>{slug}</div>;
};

export default ProjectPage;
