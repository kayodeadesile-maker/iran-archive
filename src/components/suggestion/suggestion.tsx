import RandomCoverImage from "@/assets/random-cover-image.jpg";
import { Link } from "react-router-dom";

interface SuggestionComponentProps {
  title: string;
  suggestionTitle: string;
  meaning: string;
  socialLinks?: {}[];
}

export const SuggestionComponent: React.FC<SuggestionComponentProps> = ({
  title,
  suggestionTitle,
  meaning,
}: SuggestionComponentProps) => {
  return (
    <div className="mt-10 lg:mt-12 max-w-3xl mx-auto">
      <h2 className="text-center text-xl sm:text-2xl font-inter font-semibold">{title}</h2>
      <div className="relative rounded-3xl overflow-hidden before:absolute before:inset-0  before:bg-black/50 before:content-[''] before:z-10 mt-3">
        <img
          src={RandomCoverImage}
          className="w-full h-full inset-0 object-cover object-top absolute"
          alt="random cover image"
          title="random cover image"
        />

        <div className="relative min-h-[200px] lg:min-h-[280px] z-10 flex flex-col justify-center itemsc-center p-6">
          <div className="text-center space-y-3">
            <h3 className="font-satoshi font-semibold text-xl sm:text-2xl text-white">
              {suggestionTitle}
            </h3>
            <p className="text-lg font-satoshi font-normal text-white">{meaning}</p>
          </div>

          <hr className="border-white my-7 block w-full" />

          <div className="inline-flex items-center gap-3 justify-center">
            <p className="font-satoshi font-medium text-lg text-white">Share on:</p>
            <div className="flex items-center gap-4">
              <Link to="">
                <span className="flex items-center justify-center h-8 w-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-full h-full"
                  >
                    <path
                      d="M24 12.0729C24 18.0983 19.606 23.0935 13.87 24V15.5862H16.659L17.19 12.1051H13.87V9.84649C13.87 8.89373 14.334 7.96613 15.82 7.96613H17.329V5.00222C17.329 5.00222 15.959 4.7668 14.65 4.7668C11.916 4.7668 10.13 6.43387 10.13 9.4511V12.1041H7.091V15.5852H10.13V23.999C4.395 23.0915 0 18.0973 0 12.0729C0 5.40566 5.373 0 12 0C18.627 0 24 5.40465 24 12.0729Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
              <Link to="">
                <span className="flex items-center justify-center h-8 w-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-full h-full"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM15.063 19.232L11.193 14.177L6.771 19.232H4.313L10.046 12.678L4 4.768H9.062L12.556 9.389L16.599 4.768H19.054L13.693 10.894L20 19.231L15.063 19.232Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
