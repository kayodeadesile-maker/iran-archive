import { useCallback, useEffect } from "react";

interface SearchEngineOptimizationProps {
  title: string;
  description: string;
  keywords: Array<string>;
  ogTitle: string;
  ogUrl: string;
  ogImage: string;
  ogDescription: string;
}

export const useSearchEngineOptimization = ({
  title,
  description,
  keywords,
  ogTitle,
  ogUrl,
  ogImage,
  ogDescription,
}: SearchEngineOptimizationProps) => {
  const setMetaData = useCallback((key: string, attribute: string, content: string) => {
    if (content) {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    }
  }, []);

  useEffect(() => {
    document.title = title;
    setMetaData("name", "description", description);
    setMetaData("name", "keywords", keywords.join(", "));
    setMetaData("property", "og:title", ogTitle);
    setMetaData("property", "og:url", ogUrl || window.location.href);
    setMetaData("property", "og:image", ogImage);
    setMetaData("property", "og:description", ogDescription);

    return () => {
      // Cleanup meta tags if necessary
    };
  }, [title, description, keywords, ogTitle, ogUrl, ogImage, ogDescription]);
};
