import fs from "fs";
import path from "path";

const env = process.env.NODE_ENV || "development";
/**
 * @type Record<string, any>
 */
const config = {
  baseUrl: env === "production" ? "https://iran-opal.vercel.app" : "http://localhost:5173",
  outputPath: "./public/sitemap.xml",

  routes: [],
};

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  config.routes.forEach((route) => {
    xml += "  <url>\n";
    xml += `    <loc>${config.baseUrl}${route.url}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  xml += "</urlset>";

  return xml;
}

// Ensure the directory exists
/**
 *
 * @param {string} filePath
 */
function ensureDirectoryExists(filePath) {
  // Get the directory name from the file path
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Write sitemap to file
function writeSitemap() {
  try {
    const sitemapXML = generateSitemap();
    ensureDirectoryExists(config.outputPath);
    fs.writeFileSync(config.outputPath, sitemapXML, "utf8");

    console.log(`✅ Sitemap generated successfully at: ${config.outputPath}`);
    console.log(`📊 Total URLs: ${config.routes.length}`);
    console.log(`🔗 Base URL: ${config.baseUrl}`);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error.message);
  }
}

/**
 *
 * Discover routes from the pages directory
 * @param {string} routesPath
 * @returns {Array<{url: string, changefreq: string, priority: string, lastmod: string}>}
 */
const discoveredRoutes = (routesPath = "./src/pages") => {
  /**
   * @type Array<{url: string, changefreq: string, priority: string, lastmod: string}>
   */
  const routes = [];

  if (fs.existsSync(routesPath)) {
    const files = fs.readdirSync(routesPath, { recursive: true });

    files.forEach((file) => {
      const filePath = path.join(routesPath, file);

      // Check if the file is a valid page (tsx, jsx, ts, or js)
      if (
        file.endsWith(".tsx") ||
        file.endsWith(".jsx") ||
        file.endsWith(".ts") ||
        file.endsWith(".js")
      ) {
        // Convert file path to URL path
        let route = filePath
          .replace(routesPath, "") // Remove base path
          .replace(/\.(tsx|jsx|ts|js)$/, "") // Remove file extension
          .replace(/\/index$/, "") // Remove trailing /index
          .replace(/\\/g, "/"); // Normalize separators for Windows

        // Ensure route starts with a slash and handle root route
        route = route === "" ? "/" : `/${route}`;

        routes.push({
          url: route,
          changefreq: "monthly",
          priority: "0.6",
          lastmod: fs.statSync(filePath).mtime.toISOString().split("T")[0],
        });
      }
    });
  } else {
    console.warn(`⚠️ Directory ${routesPath} does not exist. Adding fallback route.`);
    // Add a fallback root route if no pages are found
    // routes.push({
    //   url: "/",
    //   changefreq: "monthly",
    //   priority: "1.0",
    //   lastmod: new Date().toISOString().split("T")[0],
    // });
  }

  console.log("Discovered routes:", routes);
  return routes;
};

// Run the script if it's the main module
if (import.meta.url === new URL(import.meta.url).href) {
  config.routes = discoveredRoutes();
  writeSitemap();
}
