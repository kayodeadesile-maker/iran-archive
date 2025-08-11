import heroImage from "@/assets/moremi-cover-photo.jpg";
import { classNames } from "@/utils";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ShareIcon } from "@heroicons/react/24/solid";

const HeroOrLegendExplanation = () => {
  const [likeHero, setLikeHero] = useState(false);
  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <HeroPhoto />
        <ShareComponent
          likeHero={likeHero}
          setLikeHero={() => setLikeHero(!likeHero)}
        />
        <HeroDescription
          heroName="Moremí Àjàsorò"
          heroAlias="The Liberator of Ìfẹ̀"
          heroTitle="Queen of Ile-Ifẹ̀"
          heroTimePeriod="Pre-15th Century"
          heroStory="Moremi Ajasoro was a legendary queen of the Yoruba kingdom of Ife, known for her bravery and sacrifice. She played a crucial role in defending her people against invaders by infiltrating their ranks and gathering intelligence. Her story is celebrated in Yoruba oral tradition, symbolizing courage and resilience."
        />
      </div>
    </section>
  );
};

const HeroPhoto = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src={heroImage}
          alt="proverbs cover image"
          title="proverbs cover image"
          className="h-full w-full absolute inset-0 object-cover -z-1"
        />
        <div className="flex flex-col min-h-[250px] lg:min-h-[340px] justify-center relative z-10 p-4 sm:p-6 xl:p-8">
          <h1 className="text-xl sm:text-4xl lg:text-4xl font-inter font-bold text-white mb-1 auto-translate leading-xs-normal">
            Mọremí Àjàṣorò
          </h1>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="flex gap-2 z-100 my-3 flex-row justify-center">
        <DotIndicator
          activeIndex={activeIndex}
          total={5}
          onClick={(index) => setActiveIndex(index)}
        />
      </div>
    </div>
  );
};
type DotIndicatorProps = {
  total: number;
  activeIndex: number;
  onClick: (index: number) => void;
};

const DotIndicator: React.FC<DotIndicatorProps> = ({
  total,
  activeIndex,
  onClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            // backgroundColor: "#d8c4a0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          className="bg-lightgoldcolorfive "
          onClick={() => onClick(i)}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              // backgroundColor: i === activeIndex ? "#2b1d0f" : "#c19b6b",
            }}
            className={`${
              i === activeIndex ? "bg-goldcolor" : "bg-lightgoldcolorthree"
            }`}
          ></span>
        </span>
      ))}
    </div>
  );
};
type ShareComponentProps = {
  likeHero: boolean;
  setLikeHero: () => void;
};
const ShareComponent = ({ likeHero, setLikeHero }: ShareComponentProps) => {
  return (
    <div className="justify-center flex flex-row gap-4">
      <div className="flex items-center space-x-2">
        <button
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          title="Listen to content"
          type="button"
        >
          <span className="sr-only">Speak</span>
          <span className="flex items-center justify-center h-9 w-9 rounded-[5px] bg-lightgoldcolorfive hover:bg-opacity-80 transition-colors">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.83333 3.98867C1.47971 3.98867 1.14057 4.12914 0.890524 4.37919C0.640476 4.62924 0.5 4.96838 0.5 5.322L0.5 10.6553C0.5 11.009 0.640476 11.3481 0.890524 11.5981C1.14057 11.8482 1.47971 11.9887 1.83333 11.9887H3.7L8.5 15.9733V0L3.7 3.98867H1.83333Z"
                fill="#0A0B0E"
              />
              <path
                d="M13.833 7.98867C13.832 7.10494 13.4804 6.25771 12.8555 5.63281C12.2306 5.00792 11.3834 4.65639 10.4997 4.65533H9.83301V5.98867H10.4997C11.0301 5.98867 11.5388 6.19938 11.9139 6.57445C12.289 6.94953 12.4997 7.45824 12.4997 7.98867C12.4997 8.5191 12.289 9.02781 11.9139 9.40288C11.5388 9.77796 11.0301 9.98867 10.4997 9.98867H9.83301V11.322H10.4997C11.3834 11.3209 12.2306 10.9694 12.8555 10.3445C13.4804 9.71963 13.832 8.8724 13.833 7.98867Z"
                fill="#0A0B0E"
              />
              <path
                d="M10.4997 1.98868H9.83301V3.32201H10.4997C11.7374 3.32201 12.9243 3.81368 13.7995 4.68885C14.6747 5.56402 15.1663 6.751 15.1663 7.98868C15.1663 9.22636 14.6747 10.4133 13.7995 11.2885C12.9243 12.1637 11.7374 12.6553 10.4997 12.6553H9.83301V13.9887H10.4997C12.091 13.9887 13.6171 13.3565 14.7423 12.2313C15.8675 11.1061 16.4997 9.57998 16.4997 7.98868C16.4997 6.39738 15.8675 4.87126 14.7423 3.74604C13.6171 2.62082 12.091 1.98868 10.4997 1.98868Z"
                fill="#0A0B0E"
              />
            </svg>
          </span>
        </button>
        <span className="flex items-center justify-center h-9 w-9 rounded-[5px] bg-lightgoldcolorfive">
          <span className="flex items-center justify-center h-5 w-5 bg-black rounded-full">
            <HeartIcon
              className={classNames(
                likeHero ? "fill-white stroke-none" : "stroke-white",
                "h-3 transition-colors cursor-pointer"
              )}
              onClick={setLikeHero}
            />
          </span>
        </span>
      </div>
      <span className="flex flex-row gap-2.5 h-full align-middle">
        <p>Share on:</p>
        <FacebookCircleIcon className="w-8 h-8 cursor-pointer"/>
        <XCircleIcon className="w-8 h-8 rounded-full cursor-pointer" />
        <ShareIcon className="h-8 w-8 text-white bg-black rounded-full p-1"/>
      </span>
    </div>
  );
};
type IconProps = {
  className?: string;
};

const FacebookCircleIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path
      d="M15.12 8.44h-1.5c-.18 0-.42.09-.42.48v1.26h1.92l-.25 1.96h-1.67v5.05h-2.02v-5.05H9.88v-1.96h1.3v-1.45c0-1.29.78-2.39 2.36-2.39h1.58v2.06z"
      fill="#fff"
    />
  </svg>
);

const XCircleIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path
      d="M7.25 6h2.14l3.08 4.19L15.63 6h2.12l-4.06 5.4L18 18h-2.14l-3.33-4.51L9.17 18H7.04l4.14-5.46L7.25 6z"
      fill="#fff"
    />
  </svg>
);
type HeroDescriptionProps = {
  heroName: string
  heroAlias: string
  heroTitle: string
  heroTimePeriod: string
  heroStory: string
}
const HeroDescription = ({heroName, heroAlias, heroTitle, heroTimePeriod, heroStory}: HeroDescriptionProps)=>{
  return (
    <div className="px-25">
      <div className="mb-4">
        <p className="font-bold">Name</p>
        <p className="font-bold text-xl">{heroName}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-lg">Alias</p>
        <p className="text-gray-400 text-lg">{heroAlias}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-lg">Title</p>
        <p className="text-gray-400 text-lg">{heroTitle}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-lg">Time Period / Historical Context</p>
        <p className="text-gray-400 text-lg">{heroTimePeriod}</p>
      </div>
      <hr className="border-lightgoldcolorone border-[1.5px] my-10"/>
      <div className="mb-4">
        <p className="text-shadecolorfour text-lg font-satoshi font-normal">
          {heroStory}
        </p>
        </div>
    </div>
  );
}



export default HeroOrLegendExplanation;
