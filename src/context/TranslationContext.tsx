import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

interface ITranslationContext {
  isTranslating: boolean;
  isYorubaMode: boolean;
  translationMethod: string;
  setTranslationMethod: React.Dispatch<React.SetStateAction<string>>;
  setIsYorubaMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TranslationContext = createContext<ITranslationContext>({} as ITranslationContext);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationCache, setTranslationCache] = useState(new Map());
  const [isYorubaMode, setIsYorubaMode] = useState(false);
  const [translationMethod, setTranslationMethod] = useState("mymemory");

  const translateWithMyMemory = useCallback(
    async (text: string, targetLang: string = "yo", sourceLang: string = "en") => {
      const cacheKey = `${text}-${sourceLang}-${targetLang}`;

      if (translationCache.has(cacheKey)) {
        return translationCache.get(cacheKey);
      }

      try {
        setIsTranslating(true);
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=${sourceLang}|${targetLang}`;

        const response = await axios.get(url);
        const { data, status } = response;

        if (status === 200) {
          const translatedText = data.responseData.translatedText;

          setTranslationCache((prev) => new Map(prev.set(cacheKey, translatedText)));

          return translatedText;
        }
      } catch (error: unknown) {
        console.error("MyMemory translation failed:", error);
        return text;
      } finally {
        setIsTranslating(false);
      }
    },
    []
  );

  const getTranslationMethod = () => {
    switch (translationMethod) {
      case "mymemory":
        return translateWithMyMemory;
      // case "google":
      //   return translateWithGoogleFree;
      // default:
      //   return smartTranslate;
    }
  };

  const translatePageContent = useCallback(async () => {
    if (!isYorubaMode) return;

    const translateFn = getTranslationMethod()!;

    try {
      const textElements = document.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, span:not(.no-translate)"
      );

      for (const element of textElements) {
        if (element.children.length === 0 && element.textContent?.trim()) {
          const originalText = element.textContent?.trim();

          if (originalText.length > 1) {
            const translatedText = await translateFn(originalText, "yo", "en");
            element.textContent = translatedText;
            element.setAttribute("data-original", originalText);
          }
        }
      }
    } catch (error: unknown) {
      console.error("Page translation failed:", error);
    }
  }, [isYorubaMode, translationMethod]);

  const restoreOriginalContent = useCallback(() => {
    const translatedElements = document.querySelectorAll("[data-original]");
    translatedElements.forEach((element) => {
      const original = element.getAttribute("data-original");
      if (original) {
        element.textContent = original;
        element.removeAttribute("data-original");
      }
    });
  }, []);

  useEffect(() => {
    if (isYorubaMode) {
      translatePageContent();
    } else {
      restoreOriginalContent();
    }
  }, [isYorubaMode, translatePageContent, restoreOriginalContent]);

  return (
    <TranslationContext.Provider
      value={{
        isYorubaMode,
        isTranslating,
        setTranslationMethod,
        translationMethod,
        setIsYorubaMode,
      }}
    >
      <>{children}</>
    </TranslationContext.Provider>
  );
};
