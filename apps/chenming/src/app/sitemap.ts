import { promises as fs } from "fs";
import path from "path";

async function getNoteSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });

  console.log("ggwp4", entries);
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.path, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap() {
  const notesDirectory = path.join(process.cwd(), "src", "app", "n");
  const slugs = await getNoteSlugs(notesDirectory);
  const notes = slugs.map((slug) => ({
    url: `https://chenmingtmc.com/n/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = [""].map((route) => ({
    url: `https://chenmingtmc.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  console.log("last", [...routes, ...notes]);
  return [...routes, ...notes];
}
