import { useSearchEngineOptimization } from "@/hooks/seo/useSeo";

export default function ParablesAndWiseSayings() {
  const env = import.meta.env;

  useSearchEngineOptimization({
    title: "Explore Archive | Parables & Wise Sayings",
    description:
      "Iran (Yoruba) an archive for preserving accient and present yoruba tradition assets.",
    canonical:
      env.MODE === "production"
        ? "https://iran-opal.vercel.app/explore-archive/proverbs"
        : "http://localhost:5173/explore-archive/proverbs",
    themeColor: "#000000",
    appleTouchIcon: "/iran-logo.png",
    lang: "en-NG",
    keywords: [
      "Learn",
      "Yoruba",
      "Reading",
      "People",
      "Phrase",
      "Alphabets",
      "Dialects",
      "Games",
      "Traditions",
      "Herbs",
      "Proverbs",
      "History",
      "Plants",
      "Heroes",
      "Vegetables",
    ],

    ogTitle: "Archive Proverbs Page",
    ogDescription:
      "Iran (Yoruba) an archive for preserving accient and present yoruba tradition assets.",
    ogImage: "/iran-logo.png",
    ogImageAlt: "Screenshot of my awesome page",
    ogType: "website",
    ogSiteName: "Iran Yoruba Archive",
  });
  return (
    <section className="pt-10">
      <div className="max-w-6xl mx-auto"></div>
    </section>
  );
}
