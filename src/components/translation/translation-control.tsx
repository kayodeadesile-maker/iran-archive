import { classNames } from "@/utils";
import { Bars3Icon, CogIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface TranslationControlProps {
  isYorubaMode: boolean;
  isTranslating: boolean;
  translationMethod: string;
  handleSetYorubaMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetTranslationMethod: React.Dispatch<React.SetStateAction<string>>;
}

export const TranslationControlComponent: React.FC<TranslationControlProps> = ({
  isYorubaMode,
  handleSetYorubaMode,
  isTranslating,
  translationMethod,
  handleSetTranslationMethod,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const translationMethods = [
    { value: "mymemory", label: "My Memory", description: "Free collaborative translation" },
  ];

  return (
    <div className="fixed top-22 right-4 z-50">
      <button
        type="button"
        title={`${showTranslation ? "close" : "show"} translation`}
        onClick={() => setShowTranslation(!showTranslation)}
        className="mb-3 p-2 rounded-full bg-white shadow-lg border border-gray-400"
      >
        <span className="sr-only">Toggle Translation Control</span>
        {showTranslation ? (
          <XMarkIcon strokeWidth={2} className="h-5 w-5 text-gray-600 hover:text-gray-800" />
        ) : (
          <Bars3Icon strokeWidth={2} className="h-5 w-5 text-gray-600 hover:text-gray-800" />
        )}
      </button>

      {showTranslation && (
        <div className="bg-white rounded-lg shadow-lg border border-gray-400 p-4 min-w-[250px] relative transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium font-satoshi">
              {isYorubaMode ? "Yorùbá" : "English"}
            </span>
            <button
              onClick={() => handleSetYorubaMode(!isYorubaMode)}
              className={classNames(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                isYorubaMode ? "bg-blue-600" : "bg-gray-200",
                isTranslating ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              )}
              disabled={isTranslating}
            >
              <span
                className={classNames(
                  "inline-block h-4 w-4 transform rounded-full bg-white  transition-transform",
                  isYorubaMode ? "translate-x-6" : "translate-x-1"
                )}
              ></span>
            </button>
          </div>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="mt-3 text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            <CogIcon className="h-5" /> Translation Settings
          </button>

          {showSettings && (
            <div className="mt-3 pt-3 border-t border-gray-400">
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Translation Service:
              </label>
              {translationMethods.map((method) => (
                <label key={method.value} className="flex items-start gap-2 mb-2">
                  <input
                    type="radio"
                    name="translationMethod"
                    value={method.value}
                    checked={translationMethod === method.value}
                    onChange={(e) => handleSetTranslationMethod(e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <div className="text-xs font-medium">{method.label}</div>
                    <div className="text-xs text-gray-500">{method.description}</div>
                  </div>
                </label>
              ))}
            </div>
          )}

          {/* Status */}
          {isTranslating && (
            <div className="mt-3 pt-3 border-t text-xs text-blue-600 flex items-center gap-1">
              <div className="animate-spin rounded-full h-3 w-3 border-b border-t border-blue-600"></div>
              Translating to Yorùbá...
            </div>
          )}
        </div>
      )}
    </div>
  );
};
