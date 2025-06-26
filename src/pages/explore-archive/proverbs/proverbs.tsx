import React, { useCallback, useState } from "react";
import { alphabets } from "./alphabets";
import { classNames } from "@/utils";

export default function Proverbs() {
  return (
    <div className="pt-10">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-xl font-inter font-bold text-gray-900 mb-1">
            Yoruba Proverbs and Meaning (Òwe Yorùbá)
          </h1>
          <p className="font-satoshi font-normal text-base sm:text-lg lg:text-xl text-shadecolorfour leading-relaxed max-w-3xl">
            Yoruba proverbs are sacred vessels of wisdom, passed from tongue to tongue across
            generations. They are more than sayings — they are lived truths,spoken with grace, often
            wrapped in poetry. Each one carries a lesson, a warning, or a blessing — echoing the
            voice of ancestors through time.
          </p>
        </div>

        <ProverbAlphabetFilteringBoardComponent />
      </div>
    </div>
  );
}

export const ProverbAlphabetFilteringBoardComponent = () => {
  const [alphabet, setAlphabet] = useState<string | null>(null);

  const handleSetAlphabet = useCallback((value: string) => {
    setAlphabet(value);
  }, []);

  return (
    <div className="max-w-[47.5rem] mx-auto mt-10 rounded-2xl p-5 bg-lightgoldcolorfive w-full">
      <h2 className="font-satoshi sm:text-lg font-semibold">
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
