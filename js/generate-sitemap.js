import fs from "fs";
import path from "path";

const SITE_URL = "https://abhinavjosh1.github.io/info";

const dataPath = path.join(process.cwd(), "data/index.json");
const outPath = path.join(process.cwd(), "sitemap.xml");

const blogs = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

const urls = [
  `${SITE_URL}/`,
  `${SITE_URL}/blogs.html`,
  ...blogs
    .filter((b) => !b.disabled && b.file && b.file.endsWith(".md"))
    .map((b) => `${SITE_URL}/blogs.html?post=blogs/${b.file}`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(outPath, xml);
console.log("sitemap.xml generated");
