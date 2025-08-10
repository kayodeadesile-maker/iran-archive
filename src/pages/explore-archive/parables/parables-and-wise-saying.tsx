import { useSearchEngineOptimization } from "@/hooks/seo/useSeo";
import { classNames } from "@/utils";
import React, { useCallback, useState } from "react";
import { alphabets } from "@/utils/alphabets";
import { HeartIcon } from "@heroicons/react/24/outline";
import { PaginationComponent } from "@/components/common/pagination/Pagination";
import ParableCoverImage from "@/assets/parables-cover-image.png";
import { useNavigate } from "react-router-dom";
import { SuggestionComponent } from "@/components/suggestion/suggestion";
import RandomCoverImage from "@/assets/random-cover-image.jpg";

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

type Filters = "wisdom" | "patient" | "respect" | "hard-work" | "relationships" | "caution";

export default function ParablesAndWiseSayings() {
  const env = import.meta.env;
  const [isFavourite, setIsFavourite] = useState<{ [key: string]: boolean }>({});
  const [filter, setFilter] = useState<Filters>("wisdom");
  const navigate = useNavigate();

  const handleFilter = useCallback((filter: Filters) => {
    setFilter(filter);
  }, []);

  const handleMarkAsFavourite = useCallback((key: string) => {
    setIsFavourite((prev) => ({ ...prev, [key]: true }));
  }, []);

  const handleMarkAsNotFavourite = useCallback((key: string) => {
    setIsFavourite((prev) => ({ ...prev, [key]: false }));
  }, []);

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

  const proverbList = [
    {
      id: "1",
      content: "Òwe lẹ́ṣin òrò; bí òrò bá sọnù, òwe la fi ń wáa.",
    },
    {
      id: "2",
      content: "Òwe lẹ́ṣin òrò; bí òrò bá sọnù, òwe la fi ń wáa.",
    },
    {
      id: "3",
      content: "Òwe lẹ́ṣin òrò; bí òrò bá sọnù, òwe la fi ń wáa.",
    },
    {
      id: "4",
      content: "Òwe lẹ́ṣin òrò; bí òrò bá sọnù, òwe la fi ń wáa.",
    },
    {
      id: "5",
      content: "Òwe lẹ́ṣin òrò; bí òrò bá sọnù, òwe la fi ń wáa.",
    },
  ];

  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={ParableCoverImage}
            alt="Parables cover image"
            title="Parables cover image"
            className="h-full w-full absolute inset-0 object-cover"
          />
          <div className="flex flex-col min-h-[250px] lg:min-h-[340px] justify-center relative z-10 p-4 md:p-6">
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-inter font-bold text-white mb-1 auto-translate">
              Àkànlò Èdè ati Ọ̀rọ̀ Ọlọ́gbọ́n
            </h1>
            <p className="font-satoshi font-normal text-base sm:text-lg lg:text-2xl text-shadecolorseven leading-relaxed max-w-3xl">
              Yoruba Parable and Wise Saying
            </p>
          </div>
        </div>

        <ProverbAlphabetFilteringBoardComponent />
        <CategoryFilter handleFilter={handleFilter} filter={filter} />

        <ul className="space-y-3">
          {React.Children.toArray(
            proverbList.map(({ content, id }, index) => {
              return (
                <ProverbListItemComponent
                  content={content}
                  onClick={() => navigate(`${content}-${index}-${id}`)}
                  isFavourite={!!isFavourite[`${content}-${index}-${id}`]}
                  handleMarkAsFavourite={handleMarkAsFavourite}
                  handleMarkAsNotFavourite={handleMarkAsNotFavourite}
                  id={`${content}-${index}-${id}`}
                  key={`${content}-${index}-${id}`}
                />
              );
            })
          )}
        </ul>

        <PaginationComponent
          hasNextPage={true}
          next={() => console.log("next")}
          prev={() => console.log("previous")}
          page={1}
          totalItems={50}
          totalPages={100}
          setPage={(v) => console.log(v)}
        />

        <SuggestionComponent
          imageSrc={RandomCoverImage}
          meaning="You help the vulnerable with all your capacity, or to satisfactory. If you don’t, your effort might not reflect because they can’t help themselves"
          title="Parable and Wise Saying of the Day"
          suggestionTitle="Àgbàtàn là gbòlè; tá a bá dá aṣọ fún òlè, a pàláró; tá a bá làjà fún òlè, a ṣìndé lẹ́ni"
        />
      </div>
    </section>
  );
}

const CategoryFilter: React.FC<{
  filter: Filters;
  handleFilter: (filter: Filters) => void;
}> = ({ filter, handleFilter }) => {
  return (
    <nav className="border-t border-gray-400 mt-10">
      <div className="py-4">
        <h2 className="no-translate font-satoshi font-normal text-base sm:text-lg uppercase">
          filter by: <span className="lowercase font-medium text-gray-600">{filter}</span>
        </h2>
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          {React.Children.toArray(
            categories.map(({ label, value }) => {
              return (
                <button
                  key={`${label}`}
                  title={value}
                  type="button"
                  onClick={() => handleFilter(value as Filters)}
                  className={classNames(
                    "w-auto grow px-3 py-2.5 cursor-pointer bg-shadecolornine text-center font-satoshi font-medium capitalize rounded-[5px] focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 border border-gray-400"
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
        Browse parables and wise sayings with letter's starting with...
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
      <span className="auto-translate">{label}</span>
    </button>
  );
};

interface ProverbListItemProps {
  content: string;
  id: string;
  isFavourite: boolean;
  handleMarkAsFavourite: (value: string) => void;
  handleMarkAsNotFavourite: (value: string) => void;
  onClick: () => void;
}

const ProverbListItemComponent: React.FC<ProverbListItemProps> = ({
  content,
  isFavourite,
  handleMarkAsFavourite,
  handleMarkAsNotFavourite,
  id,
  onClick,
}) => {
  return (
    <li className="even:bg-lightgoldcolorfive odd:bg-lightgoldcolorsix px-4 py-2.5 border border-gray-200">
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            onClick();
          }}
        >
          <span className="text-sm sm:text-base lg:text-lg font-satoshi font-normal">
            {content}
          </span>
        </button>
        <div className="inline-flex items-center space-x-2">
          <button type="button" className="cursor-pointer">
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-lightgoldcolorthree">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 w-1/2 h-1/2"
              >
                <path
                  d="M10.8215 8.38727C10.4282 8.38759 10.0408 8.48362 9.69288 8.66706C9.34494 8.85051 9.04685 9.11586 8.82435 9.44023L5.43813 7.91125C5.67864 7.33048 5.67958 6.67813 5.44073 6.09667L8.82227 4.55989C9.15203 5.03682 9.64181 5.37976 10.2028 5.52651C10.7637 5.67326 11.3587 5.6141 11.8798 5.35976C12.4008 5.10541 12.8135 4.67273 13.0429 4.1402C13.2722 3.60767 13.3032 3.01056 13.13 2.45719C12.9569 1.90381 12.5911 1.43082 12.0991 1.12402C11.6071 0.817215 11.0214 0.696915 10.4483 0.784941C9.87518 0.872967 9.3526 1.16349 8.97534 1.60381C8.59808 2.04413 8.39113 2.60508 8.39203 3.18491C8.39424 3.32215 8.40816 3.45894 8.43365 3.59381L4.83882 5.22736C4.49356 4.90388 4.06133 4.68831 3.59523 4.60711C3.12914 4.52591 2.64947 4.58263 2.21517 4.7703C1.78087 4.95798 1.41084 5.26842 1.15055 5.6635C0.890261 6.05858 0.751045 6.52109 0.750006 6.99421C0.748966 7.46732 0.886149 7.93044 1.1447 8.32666C1.40325 8.72288 1.77191 9.03495 2.20538 9.22452C2.63886 9.4141 3.11827 9.47293 3.58472 9.39378C4.05117 9.31464 4.48434 9.10096 4.83102 8.77901L8.43521 10.4063C8.41018 10.5411 8.39643 10.6777 8.39411 10.8147C8.39401 11.2949 8.53633 11.7644 8.80308 12.1638C9.06982 12.5631 9.44901 12.8744 9.89268 13.0582C10.3364 13.2421 10.8246 13.2902 11.2956 13.1965C11.7666 13.1029 12.1993 12.8716 12.5389 12.532C12.8785 12.1924 13.1097 11.7598 13.2034 11.2888C13.297 10.8177 13.2489 10.3295 13.0651 9.88584C12.8813 9.44217 12.57 9.06298 12.1706 8.79624C11.7713 8.52949 11.3018 8.38717 10.8215 8.38727ZM10.8215 1.79744C11.096 1.79733 11.3643 1.87862 11.5925 2.03102C11.8208 2.18341 11.9987 2.40007 12.1038 2.65358C12.2089 2.9071 12.2364 3.18609 12.1829 3.45527C12.1295 3.72445 11.9973 3.97172 11.8033 4.16581C11.6093 4.35991 11.3621 4.4921 11.0929 4.54568C10.8238 4.59926 10.5448 4.57181 10.2912 4.46681C10.0377 4.36181 9.82093 4.18398 9.66845 3.9558C9.51597 3.72762 9.43459 3.45935 9.43459 3.18491C9.43486 2.8171 9.58106 2.46443 9.84109 2.20431C10.1011 1.94418 10.4537 1.79785 10.8215 1.79744ZM3.19175 8.38727C2.91731 8.38737 2.64901 8.30609 2.42077 8.15369C2.19254 8.0013 2.01462 7.78464 1.90953 7.53112C1.80443 7.2776 1.77688 6.99861 1.83036 6.72944C1.88383 6.46026 2.01594 6.21299 2.20996 6.01889C2.40398 5.8248 2.6512 5.69261 2.92036 5.63903C3.18951 5.58545 3.46852 5.6129 3.72207 5.7179C3.97563 5.82289 4.19235 6.00073 4.34483 6.22891C4.49731 6.45709 4.5787 6.72536 4.5787 6.9998C4.57829 7.36756 4.43205 7.72015 4.17205 7.98025C3.91205 8.24035 3.55951 8.38672 3.19175 8.38727ZM10.8215 12.2022C10.5471 12.2022 10.2789 12.1208 10.0507 11.9683C9.82253 11.8159 9.64469 11.5992 9.53968 11.3457C9.43467 11.0921 9.40719 10.8132 9.46073 10.544C9.51426 10.2749 9.64641 10.0276 9.84045 9.8336C10.0345 9.63956 10.2817 9.50742 10.5509 9.45388C10.82 9.40035 11.099 9.42782 11.3525 9.53284C11.606 9.63785 11.8227 9.81569 11.9752 10.0439C12.1276 10.272 12.209 10.5403 12.209 10.8147C12.2087 11.1826 12.0625 11.5353 11.8023 11.7955C11.5422 12.0556 11.1894 12.2019 10.8215 12.2022Z"
                  fill="white"
                  strokeWidth={2.5}
                />
              </svg>
            </span>
          </button>

          <button
            type="button"
            className="cursor-pointer"
            onClick={() =>
              isFavourite ? handleMarkAsNotFavourite(id) : handleMarkAsFavourite(id)!
            }
          >
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-lightgoldcolorthree">
              <HeartIcon
                className={classNames(
                  "shrink-0 w-1/2 h-1/2",
                  isFavourite ? "stroke-none fill-white" : "stroke-white"
                )}
                strokeWidth={2.5}
              />
            </span>
          </button>

          <button type="button" className="cursor-pointer">
            <span className="flex items-center justify-center h-8 w-8">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66452 4.98583C1.22307 4.98583 0.799687 5.16143 0.487528 5.47399C0.175369 5.78655 0 6.21047 0 6.6525L0 13.3192C0 13.7612 0.175369 14.1851 0.487528 14.4977C0.799687 14.8102 1.22307 14.9858 1.66452 14.9858H3.99486L9.98715 19.9667V0L3.99486 4.98583H1.66452Z"
                  fill="#D8B787"
                />
                <path
                  d="M16.6454 9.98588C16.6441 8.88122 16.2053 7.82218 15.4252 7.04106C14.645 6.25995 13.5874 5.82054 12.4841 5.81921H11.6519V7.48588H12.4841C13.1463 7.48588 13.7814 7.74927 14.2496 8.21811C14.7179 8.68696 14.9809 9.32284 14.9809 9.98588C14.9809 10.6489 14.7179 11.2848 14.2496 11.7537C13.7814 12.2225 13.1463 12.4859 12.4841 12.4859H11.6519V14.1526H12.4841C13.5874 14.1512 14.645 13.7118 15.4252 12.9307C16.2053 12.1496 16.6441 11.0905 16.6454 9.98588Z"
                  fill="#D8B787"
                />
                <path
                  d="M12.4841 2.48584H11.6519V4.15251H12.4841C14.0292 4.15251 15.5111 4.76709 16.6036 5.86105C17.6962 6.95501 18.31 8.43875 18.31 9.98584C18.31 11.5329 17.6962 13.0167 16.6036 14.1106C15.5111 15.2046 14.0292 15.8192 12.4841 15.8192H11.6519V17.4858H12.4841C14.4707 17.4858 16.3759 16.6957 17.7806 15.2891C19.1853 13.8826 19.9745 11.975 19.9745 9.98584C19.9745 7.99672 19.1853 6.08906 17.7806 4.68254C16.3759 3.27602 14.4707 2.48584 12.4841 2.48584Z"
                  fill="#D8B787"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </li>
  );
};
