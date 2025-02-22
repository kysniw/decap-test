import { ProjectData } from "@/libs/types";
import { generateSlug } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectTile = ({ project }: { project: ProjectData }) => {
  const slug = generateSlug(project.title);

  return (
    <Link href={`/portfolio/${slug}`} className="aspect-ratio w-[300px]">
      <Image
        src="/media/5831ec_4fce619d68a14574932c7f698c2dda33~mv2.webp"
        alt={`${project.title} first image`}
        width={400}
        height={400}
        className="object-cover w-fit"
      />
    </Link>
  );
};

export default ProjectTile;
