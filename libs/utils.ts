import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getFolderMarkups = (
  directory: string
): matter.GrayMatterFile<string>[] | null => {
  /* Converts all files in a directory to gray-matter objects */
  try {
    const directoryPath = path.join(process.cwd(), directory);
    const files = fs.readdirSync(directoryPath);

    return files.map((filename) => {
      const filePath = path.join(directoryPath, filename);
      const data = matter.read(filePath);
      // data.content = filename;
      return { ...data, filename };
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMarkup = (
  directory: string,
  filename: string
): matter.GrayMatterFile<string> | null => {
  /* Converts specific file to a gray-matter object */
  try {
    const file = matter.read(path.join(process.cwd(), directory, filename));
    console.log(file);
    return file;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const generateSlug = (text: string) => {
  const slug = text
    .toLowerCase()
    .replaceAll(" ", "_")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  console.log(slug);

  return slug;
};
