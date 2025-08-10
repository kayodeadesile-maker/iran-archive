import { SuggestionComponent } from "@/components/suggestion/suggestion";
import { SpeechControls } from "@/components/translation/speech-control";
import { UsageComponent } from "@/components/common/usage/Usage";
import { useSearchEngineOptimization } from "@/hooks/seo/useSeo";
import { classNames } from "@/utils";
import { ArrowLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RandomCoverImage from "@/assets/random-cover-image.jpg";

export default function ProverbDetailExplaination() {
  const env = import.meta.env;
  const navigate = useNavigate();
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

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
    lang: "yo-ng",
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
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          title="back"
          type="button"
          className="flex items-center gap-3 hover:underline active:underline text-base font-medium mb-4 dark:text-white"
          onClick={() => navigate("/explore-archive/proverbs/")}
        >
          <ArrowLeftIcon className="size-4 shrink-0" />
          back
        </button>

        <article className="">
          <span className="font-satoshi font-normal italic text-2xl inline-block mb-2">
            Proverb (Owe):
          </span>

          <div className="border-t border-gray-400 py-2">
            <div className="mb-2">
              <h1 className="font-inter font-semibold text-3xl">
                Ogbon ọlọ́gbon ní kì í jẹ́ kí a pè àgbà ní wèrè
              </h1>
              <p className="font-satoshi text-lg mt-2">
                <span className="font-medium">Literal:</span>{" "}
                <span className="font-normal text-shadecolorfour">
                  Borrowed wisdom is the reason we can't call an elder a mad man or mad woman
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:items-center sm:flex-row sm:justify-between xl:gap-0 mt-5">
              <div className="flex items-center gap-2">
                <SpeechControls content="Ogbon ọlọ́gbon ní kì í jẹ́ kí a pè àgbà ní wèrè" />

                <button
                  onClick={() => setIsFavourite(!isFavourite)}
                  className="cursor-pointer"
                  title="like"
                  type="button"
                >
                  <span className="flex items-center justify-center h-9 w-9 rounded-[5px] bg-lightgoldcolorfive">
                    <span className="flex items-center justify-center h-5 w-5 bg-black rounded-full">
                      <HeartIcon
                        className={classNames(
                          isFavourite ? "fill-white stroke-none" : "stroke-white",
                          "h-3 transition-colors"
                        )}
                      />
                    </span>
                  </span>
                </button>
              </div>

              <div className="inline-flex items-center gap-3">
                <p className="font-satoshi font-medium text-lg">Share on:</p>
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
                          fill="#0A0B0E"
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
                          fill="#0A0B0E"
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
                        <circle cx="12" cy="12" r="12" fill="#0A0B0E" />
                        <path
                          d="M16.5858 13.6666C16.1138 13.6669 15.649 13.7823 15.2315 14.0027C14.8139 14.223 14.4562 14.5418 14.1892 14.9315L10.1258 13.0947C10.4144 12.397 10.4155 11.6133 10.1289 10.9148L14.1867 9.06867C14.5824 9.64161 15.1702 10.0536 15.8433 10.2299C16.5165 10.4062 17.2304 10.3351 17.8557 10.0296C18.481 9.72401 18.9762 9.20422 19.2514 8.56448C19.5267 7.92475 19.5638 7.20743 19.356 6.54266C19.1482 5.87788 18.7093 5.30967 18.1189 4.9411C17.5285 4.57253 16.8257 4.42802 16.1379 4.53376C15.4502 4.63951 14.8231 4.98852 14.3704 5.51748C13.9177 6.04644 13.6694 6.72032 13.6704 7.41688C13.6731 7.58174 13.6898 7.74608 13.7204 7.9081L9.40658 9.8705C8.99227 9.48191 8.4736 9.22293 7.91428 9.12539C7.35496 9.02785 6.77937 9.09599 6.2582 9.32144C5.73704 9.54689 5.29301 9.91983 4.98066 10.3944C4.66831 10.8691 4.50125 11.4247 4.50001 11.993C4.49876 12.5614 4.66338 13.1178 4.97364 13.5937C5.2839 14.0697 5.72629 14.4446 6.24646 14.6724C6.76663 14.9001 7.34192 14.9708 7.90166 14.8757C8.4614 14.7806 8.98121 14.5239 9.39722 14.1372L13.7223 16.0921C13.6922 16.2539 13.6757 16.418 13.6729 16.5827C13.6728 17.1596 13.8436 17.7236 14.1637 18.2033C14.4838 18.6831 14.9388 19.057 15.4712 19.2779C16.0036 19.4987 16.5895 19.5565 17.1547 19.444C17.7199 19.3315 18.2391 19.0537 18.6466 18.6457C19.0541 18.2378 19.3316 17.718 19.444 17.1521C19.5564 16.5863 19.4987 15.9998 19.2781 15.4668C19.0575 14.9338 18.684 14.4783 18.2048 14.1578C17.7255 13.8374 17.1621 13.6664 16.5858 13.6666ZM16.5858 5.75009C16.9152 5.74997 17.2371 5.84762 17.511 6.03069C17.7849 6.21376 17.9984 6.47404 18.1245 6.77859C18.2506 7.08315 18.2837 7.4183 18.2195 7.74167C18.1553 8.06504 17.9968 8.36209 17.764 8.59525C17.5312 8.82842 17.2345 8.98723 16.9115 9.05159C16.5885 9.11596 16.2537 9.08299 15.9495 8.95685C15.6452 8.83071 15.3851 8.61708 15.2021 8.34296C15.0192 8.06885 14.9215 7.74656 14.9215 7.41688C14.9218 6.97503 15.0973 6.55136 15.4093 6.23887C15.7213 5.92637 16.1445 5.75059 16.5858 5.75009ZM7.4301 13.6666C7.10078 13.6667 6.77881 13.569 6.50493 13.386C6.23104 13.2029 6.01754 12.9426 5.89143 12.638C5.76532 12.3335 5.73226 11.9983 5.79643 11.675C5.8606 11.3516 6.01913 11.0546 6.25195 10.8214C6.48477 10.5882 6.78144 10.4294 7.10443 10.365C7.42742 10.3007 7.76222 10.3337 8.06649 10.4598C8.37076 10.5859 8.63083 10.7996 8.8138 11.0737C8.99678 11.3478 9.09444 11.6701 9.09444 11.9998C9.09395 12.4416 8.91846 12.8651 8.60646 13.1776C8.29446 13.4901 7.87142 13.6659 7.4301 13.6666ZM16.5858 18.2494C16.2565 18.2494 15.9346 18.1517 15.6608 17.9685C15.387 17.7854 15.1736 17.5251 15.0476 17.2205C14.9216 16.9159 14.8886 16.5808 14.9529 16.2575C15.0171 15.9342 15.1757 15.6372 15.4085 15.4041C15.6414 15.1709 15.9381 15.0122 16.261 14.9479C16.584 14.8836 16.9188 14.9166 17.223 15.0427C17.5272 15.1689 17.7873 15.3825 17.9702 15.6566C18.1532 15.9307 18.2508 16.253 18.2508 16.5827C18.2505 17.0246 18.075 17.4484 17.7628 17.7609C17.4506 18.0734 17.0273 18.2491 16.5858 18.2494Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t-2 border-lightgoldcolorone py-6">
              <div>
                <h2 className="font-inter font-semibold text-lg">Meaning:</h2>
                <ul className="list-disc space-y-3 pl-8">
                  <li>
                    <p className="font-satoshi font-normal text-lg text-shadecolorfour text-justify">
                      You cannot ignore an elderly advice because of his or her experience. This
                      experience might not be originally there own experience, but this elder has an
                      account of such thing being happened to someone else.
                    </p>
                  </li>
                  <li>
                    <p className="font-satoshi font-normal text-lg text-shadecolorfour text-justify">
                      It can also mean elderly people consult people before making critical
                      decisions. By consulting other people for advice or opinion means its not
                      originally their idea, but the act of consulting and digesting people’s idea
                      before making decision makes them and elder or the wise one.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-9">
                <h2 className="font-inter font-semibold text-lg">Key Words: ”Ogbon ologbon”</h2>
                <ul className="list-disc space-y-3 pl-8">
                  <li>
                    <p className="font-satoshi font-normal text-lg text-shadecolorfour text-justify">
                      ”Ogbon ologbon” here could mean someone else knowledge or someone experience
                      witnessed by an elder, added to elder own experience as if it had happened to
                      them, and this help elder to avert or make right decision when history is
                      about to repeat itself.
                    </p>
                  </li>
                  <li>
                    <p className="font-satoshi font-normal text-lg text-shadecolorfour text-justify">
                      ”Ogbon ologbon” can also mean an elder asked for people opinion about a
                      critical issue, then the elder digest there opinions with wisdom before making
                      decision.
                    </p>
                  </li>
                </ul>
              </div>

              <UsageComponent />
            </div>
          </div>

          <SuggestionComponent
            imageSrc={RandomCoverImage}
            meaning="You help the vulnerable with all your capacity, or to satisfactory. If you don’t, your effort might not reflect because they can’t help themselves"
            title="Popular Proverb"
            suggestionTitle="Àgbàtàn là gbòlè; tá a bá dá aṣọ fún òlè, a pàláró; tá a bá làjà fún òlè, a ṣìndé lẹ́ni"
          />
        </article>
      </div>
    </section>
  );
}
