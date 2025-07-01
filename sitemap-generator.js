import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const env = process.env.NODE_ENV || "development";
console.log(process.env.NODE_ENV);
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
function discoveredRoutes(routesDir = "./src/pages") {
  const discoveredRoutes = [];

  if (fs.existsSync(routesDir)) {
    const files = fs.readdirSync(routesDir, { recursive: true });

    files.forEach((file) => {
      if (
        file.endsWith(".js") ||
        file.endsWith(".jsx") ||
        file.endsWith(".ts") ||
        file.endsWith(".tsx")
      ) {
        let route = file
          .replace(/\.(js|jsx|ts|tsx)$/, "")
          .replace(/home$/, "")
          .replace(/\\/g, "/");

        if (route && !route.startsWith("_")) {
          route = route === "" ? "/" : `/${route}`;
          discoveredRoutes.push({
            url: route,
            changefreq: "monthly",
            priority: "0.6",
            lastmod: fs.statSync(path.join(routesDir, file)).mtime.toISOString().split("T")[0],
          });
        }
      }
    });
  }

  return discoveredRoutes;
}
// const discoveredRoutes = (routesPath = "./src/pages") => {
//   /**
//    * @type Array<{url: string, changefreq: string, priority: string, lastmod: string}>
//    */
//   const routes = [];
//   const normalizedRoutesPath = path.resolve(routesPath);

//   if (fs.existsSync(routesPath)) {
//     const files = fs.readdirSync(normalizedRoutesPath, { recursive: true, withFileTypes: true });

//     files.forEach((file) => {
//       if (file.isFile()) {
//         const filePath = path.join(normalizedRoutesPath, file.name);
//         const relativePath = path.relative(normalizedRoutesPath, filePath);

//         // Check if the file is a valid page (tsx, jsx, ts, or js)
//         if (
//           file.name.endsWith(".tsx") ||
//           file.name.endsWith(".jsx") ||
//           file.name.endsWith(".ts") ||
//           file.name.endsWith(".js")
//         ) {
//           // Convert file path to URL path
//           let route = relativePath // Remove base path
//             .replace(/\.(tsx|jsx|ts|js)$/, "") // Remove file extension
//             .replace(/\/index$/, "") // Remove trailing /index
//             .replace(/\\/g, "/"); // Normalize separators for Windows

//           // Ensure route starts with a slash and handle root route
//           route = route === "" ? "/" : `/${route}`;

//           // Assign priority based on route depth
//           const depth = route.split("/").length - 1;
//           const priority = depth === 1 ? "1.0" : depth === 2 ? "0.8" : "0.6";

//           routes.push({
//             url: route,
//             changefreq: "monthly",
//             priority,
//             lastmod: fs.statSync(filePath).mtime.toISOString().split("T")[0],
//           });
//         }
//       }
//     });
//   } else {
//     console.warn(`⚠️ Directory ${routesPath} does not exist. Adding fallback route.`);
//     // Add a fallback root route if no pages are found
//     routes.push({
//       url: "/",
//       changefreq: "monthly",
//       priority: "1.0",
//       lastmod: new Date().toISOString().split("T")[0],
//     });
//   }

//   console.log("Discovered routes:", routes);
//   return routes;
// };

// Run the script if it's the main module
if (import.meta.url === new URL(import.meta.url).href) {
  config.routes = discoveredRoutes();
  writeSitemap();
}
