export interface PortfolioData {
  title: string;
  paragraphs: string[];
  projects: ProjectData[];
}

export interface ProjectData {
  title: string;
  description: string;
  location?: string;
  date?: string;
  project_type?: string;
  images: string[];
}
