import React, { useCallback, useState } from "react";
import { alphabets } from "./alphabets";
import { classNames } from "@/utils";
import { useSearchEngineOptimization } from "@/hooks/seo/useSeo";

export default function Proverbs() {
  const env = import.meta.env;

  useSearchEngineOptimization({
    title: "Explore Archive | Proverbs",
    description:
      "Iran (Yoruba) an archive for preserving accient and present yoruba tradition assets.",
    canonical:
      env.MODE === "production"
        ? "https://iran-opal.vercel.app/explore-archive/proverbs"
        : "http://localhost:5173/explore-archive/proverbs",
    themeColor: "#000000",
    appleTouchIcon: "/iran-logo.png",
    lang: "yo",
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
    <div className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-xl font-inter font-bold text-gray-900 mb-1">
            Yoruba Proverbs and Meaning <span className="auto-translate">(Òwe Yorùbá)</span>
          </h1>
          <p className="font-satoshi font-normal text-base sm:text-lg lg:text-xl text-shadecolorfour leading-relaxed max-w-3xl">
            Yoruba proverbs are sacred vessels of wisdom, passed from tongue to tongue across
            generations. They are more than sayings — they are lived truths,spoken with grace, often
            wrapped in poetry. Each one carries a lesson, a warning, or a blessing — echoing the
            voice of ancestors through time.
          </p>
        </div>

        <ProverbAlphabetFilteringBoardComponent />

        <CategoryFilter />
      </div>
    </div>
  );
}

const CategoryFilter = () => {
  const categories = [
    {
      value: "wisdom",
      label: "wisdom",
    },
    {
      value: "patient",
      label: "patient",
    },
    {
      value: "respect",
      label: "respect",
    },
    {
      value: "hard-work",
      label: "hard work",
    },
    {
      value: "relationships",
      label: "relationships",
    },
    {
      value: "caution",
      label: "caution",
    },
  ];

  return (
    <nav className="no-translate border-t border-gray-400 mt-10">
      <div className="py-4">
        <h2 className="font-satoshi font-normal text-base sm:text-lg uppercase">filter by: </h2>
        <div className="flex items-center gap-2 mt-3">
          {React.Children.toArray(
            categories.map(({ label, value }) => {
              return (
                <button
                  key={`${label}`}
                  title={value}
                  type="button"
                  className={classNames(
                    "w-full px-3 py-2.5 bg-shadecolornine text-center font-satoshi font-medium capitalize rounded-[5px] focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 border border-gray-400"
                  )}
                >
                  {label}
                </button>
              );
            })
          )}
        </div>
      </div>
    </nav>
  );
};

export const ProverbAlphabetFilteringBoardComponent = () => {
  const [alphabet, setAlphabet] = useState<string | null>(null);

  const handleSetAlphabet = useCallback((value: string) => {
    setAlphabet(value);
  }, []);

  return (
    <div className="max-w-[47.5rem] mx-auto mt-10 rounded-2xl p-5 bg-lightgoldcolorfive w-full">
      <h2 className="no-translate font-satoshi sm:text-lg font-semibold">
        Browse proverbs with letter's starting with...
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-13 gap-2 sm:gap-3 md:gap-x-0 justify-items-center mt-4">
        {React.Children.toArray(
          alphabets.map((_alphabet, index) => {
            return (
              <AlphabetComponent
                key={`${_alphabet.label}-${index}`}
                onClick={handleSetAlphabet}
                isSelected={alphabet === _alphabet.value}
                {..._alphabet}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

interface AlphabetComponentProps {
  label: string;
  value: string;
  onClick: (value: string) => void;
  isSelected: boolean;
}

const AlphabetComponent = ({
  label,
  value,
  onClick,
  isSelected = false,
}: AlphabetComponentProps) => {
  return (
    <button
      className={classNames(
        "shrink-0 rounded-[10px] capitalize font-satoshi font-semibold flex items-center justify-center h-14 w-full sm:h-12 sm:w-12 cursor-pointer",
        isSelected
          ? "text-gray-50 shadow transform scale-110 bg-lightgoldcolorthree"
          : "bg-lightgoldcolorfour text-goldcolor border-gray-400 hover:border-gray-500 hover:shadow-md hover:transform hover:scale-105",
        "active:transform active:scale-85",
        "focus:outline-none focus:ring-2 focus:ring-goldcolor focus:ring-offset-1",
        "border-1 border-gray-400 transition-all duration-200 ease-in-out"
      )}
      title={label.toUpperCase()}
      type="button"
      aria-pressed={isSelected}
      aria-label={`Filter proverbs starting with ${label}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
};
