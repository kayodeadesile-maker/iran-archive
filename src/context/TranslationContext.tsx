import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { LocalStorage } from "@/utils";

interface ITranslationContext {
  isTranslating: boolean;
  isYorubaMode: boolean;
  translationMethod: string;
  setTranslationMethod: React.Dispatch<React.SetStateAction<string>>;
  setIsYorubaMode: React.Dispatch<React.SetStateAction<boolean>>;
  detectUserLanguage: () => void;
  translateText: (text: string, targetLang?: string, sourceLang?: string) => Promise<string>;
}

export const TranslationContext = createContext<ITranslationContext>({} as ITranslationContext);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationCache, setTranslationCache] = useState(new Map());
  const [isYorubaMode, setIsYorubaMode] = useState(false);
  const [translationMethod, setTranslationMethod] = useState("mymemory");
  // const [userLanguagePreference, setUserLanguagePreference] = useState(null);
  // const observerRef = useRef(null);

  const detectUserLanguage = useCallback(() => {
    const savedPrefrence = LocalStorage.get("language-preference");

    if (savedPrefrence) {
      return savedPrefrence;
    }

    const browserLanguage = navigator.language || navigator.languages[0];
    // const langCode = browserLanguage.split("-")[0].toLowerCase();

    const yorubaIndicators = ["yo", "yoruba"];
    const nigerianIndicators = ["en-ng", "ng"];

    if (yorubaIndicators.some((indicator) => browserLanguage.toLowerCase().includes(indicator)))
      return "yo";

    if (nigerianIndicators.some((indicator) => browserLanguage.toLowerCase().includes(indicator)))
      return "auto-yo";

    return "en";
  }, []);

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
      } catch (error: any) {
        // toast.error(message);
        console.error("MyMemory translation failed:", error);
        return text;
      } finally {
        setIsTranslating(false);
      }
    },
    [translationCache, setIsTranslating]
  );

  const getTranslationMethod = useCallback(() => {
    switch (translationMethod) {
      case "mymemory":
        return translateWithMyMemory;
      // case "google":
      //   return translateWithGoogleFree;
      default:
        return translateWithMyMemory;
    }
  }, [translationMethod, translateWithMyMemory]);

  const translateText = useCallback(
    async (text: string, targetLang: string = "yo", sourceLang: string = "en") => {
      const translateFn = getTranslationMethod();
      return await translateFn(text, targetLang, sourceLang);
    },
    [getTranslationMethod]
  );

  const translatePageContent = useCallback(async () => {
    if (!isYorubaMode) return;

    const translateFn = getTranslationMethod()!;

    try {
      const textElements = document.querySelectorAll(
        "div:not(.no-translate), nav:not(.no-translate), p:not(.no-translate):not(.auto-translate), h1:not(.no-translate):not(.auto-translate), h2:not(.no-translate):not(.auto-translate), h3:not(.no-translate):not(.auto-translate), h4:not(.no-translate):not(.auto-translate), h5:not(.no-translate):not(.auto-translate), h6:not(.no-translate):not(.auto-translate), span:not(.no-translate):not(.auto-translate)"
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
    const translatedElements = document.querySelectorAll("[data-original]:not(.no-translate)");
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

  useEffect(() => {
    const autoTranslateContent = async () => {
      const translateFn = getTranslationMethod()!;

      try {
        const textElements = document.querySelectorAll(".auto-translate:not(.no-translate)");

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
        console.error("Auto-translation failed:", error);
      }
    };

    autoTranslateContent();
  }, [getTranslationMethod]);

  return (
    <TranslationContext.Provider
      value={{
        isYorubaMode,
        isTranslating,
        setTranslationMethod,
        translationMethod,
        setIsYorubaMode,
        detectUserLanguage,
        translateText,
      }}
    >
      <>{children}</>
    </TranslationContext.Provider>
  );
};
