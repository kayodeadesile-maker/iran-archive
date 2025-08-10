import { UsageComponent } from "@/components/common/usage/Usage";
import { classNames } from "@/utils";
import { ArrowLeftIcon, HeartIcon, StopIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import EwuroImage from "@/assets/plants/ewuro.jpg";

export default function PlantAndVegetableExplanation() {
  const navigate = useNavigate();

  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          title="back"
          type="button"
          className="flex items-center gap-3 hover:underline active:underline text-base font-medium mb-4 dark:text-white cursor-pointer"
          onClick={() => navigate("/explore-archive/plants-and-vegetables")}
        >
          <ArrowLeftIcon className="size-4 shrink-0" />
          Back
        </button>

        {/* Plant and Vegetable Carousel start */}
        <PlantAndVegetableCarousel />
        {/* Plant and Vegetable Carousel end */}

        {/* Plant and Vegetable Details start */}
        <article className="mt-10">
          <h1 className="font-satoshi font-semibold italic text-2xl mb-2">Name</h1>
          <div className="border-t border-gray-400 py-2">
            <h2 className="font-satoshi font-medium text-2xl mb-1.5">
              Èwúro (Vernonia amygdalina)
            </h2>

            <div className="mb-5">
              <h3 className="font-satoshi font-medium text-lg mb-1.5">Description:</h3>
              <div className="max-w-3xl">
                <p className="font-satoshi text-lg text-shadecolorfour font-normal ">
                  Èwúrọ̀ is a leafy green plant known for its distinct bitter taste. It is widely
                  consumed across Yoruba communities and holds both culinary and medicinal
                  significance. Its bitterness is often reduced through washing or boiling before
                  cooking.
                </p>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-satoshi font-medium text-lg">Scientific Name & Classification</h3>
              <div className="pl-8">
                <ul className="list-disc text-lg text-shadecolorfour font-satoshi font-normal ">
                  <li>Scientific name: Vernonia amygdalina</li>
                  <li>Family: Asteraceae Plant</li>
                  <li>Type: Shrub Growth</li>
                  <li>Pattern: Perennial, woody stems, grows up to 2–5 meters.</li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-satoshi font-medium text-lg">Culinary Use</h3>
              <div className="">
                <h3 className="text-lg text-shadecolorfour font-satoshi font-normal ">
                  Èwúrọ̀ is widely used in Yoruba cuisine:
                </h3>
                <div className="pl-8">
                  <ul className="list-disc text-lg text-shadecolorfour font-satoshi font-normal ">
                    <li>Cooked in rich soups like Ègúsí Ewúrọ̀ and Ọbẹ̀ Ewúrọ̀.</li>
                    <li>Often paired with pounded yam, amala, or fufu.</li>
                    <li>
                      The bitterness is managed by squeezing and rinsing the leaves before cooking.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-satoshi font-medium text-lg">Medicinal Use</h3>
              <div className="">
                <h3 className="text-lg text-shadecolorfour font-satoshi font-normal ">
                  Traditional healers and elders use Èwúrọ̀ for:
                </h3>
                <div className="pl-8">
                  <ul className="list-disc text-lg text-shadecolorfour font-satoshi font-normal ">
                    <li>Malaria treatment: Bitter leaf water is taken as a natural remedy.</li>
                    <li>
                      Stomach issues: It helps cleanse the digestive system and relieve
                      constipation.
                    </li>
                    <li>Blood sugar control: Widely believed to help manage diabetes.</li>
                    <li>Liver and kidney detox: Used in herbal detox mixtures.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* Plant and Vegetable Details end */}

        {/* Usage start */}
        <UsageComponent />
        {/* Usage end */}
      </div>
    </section>
  );
}

const PlantAndVegetableCarousel = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [currentCarouselView, setCurrentCarouselView] = useState<number>(0);

  const handleNextCarouselView = useCallback(() => {
    setCurrentCarouselView((prev) => {
      return (prev + 1) % 5;
    });
  }, []);

  const handleCarouselViewChange = useCallback(
    (index: number) => {
      setCurrentCarouselView(index);
    },
    [setCurrentCarouselView]
  );

  const handlePreviousCarouselView = useCallback(() => {
    if (currentCarouselView > 0) {
      setCurrentCarouselView((prev) => (prev - 1 + 5) % 5);
    }
  }, [currentCarouselView]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentCarouselView >= 0) {
        switch (e.key) {
          case "ArrowLeft":
            handlePreviousCarouselView();
            break;
          case "ArrowRight":
            handleNextCarouselView();
            break;
        }
      }
    },
    [currentCarouselView, handleNextCarouselView, handlePreviousCarouselView]
  );

  useEffect(() => {
    if (currentCarouselView >= 0) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentCarouselView, handleKeyDown]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
    },
  };

  const carosuelTitleVariants = {
    initial: {
      y: 30,
      opacity: 0,
      scale: 0.9,
    },

    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
  };

  const carosuelSubtitleVariants = {
    initial: {
      y: 30,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const carosuelImageVariants = {
    initial: {
      opacity: 0,
      scale: 0.55,
    },

    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  const listsContainer = {
    initial: { opacity: 0, scale: 0.55 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const listItems = (delay: number) => {
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    };
  };

  const imageContainerVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
  };

  const floatingIndicatorVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
  };

  const imageVariants = {
    initial: {
      scale: 1.2,
    },
    animate: {
      scale: 1,
    },
  };

  return (
    <div className="mt-4">
      <div className="space-y-7">
        <motion.div
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          initial="initial"
          variants={{
            ...containerVariants,
            animate: {
              ...containerVariants.animate,
              transition: {
                duration: 0.8,
                staggerChildren: 0.15,
                delayChildren: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
          className="rounded-3xl bg-green p-4 sm:p-6 xl:p-8 flex flex-col justify-between sm:flex-row sm:items-center gap-2"
        >
          <div className="flex justify-center h-full flex-col space-y-2">
            <motion.h3
              variants={{
                ...carosuelTitleVariants,
                animate: {
                  ...carosuelTitleVariants.animate,
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.2,
                  },
                },
              }}
              className="font-inter font-bold text-white text-3xl sm:text-3xxl lg:text-2xl xl:text-5xl"
            >
              Èwúro (Vernonia amygdalina)
            </motion.h3>
            <motion.p
              variants={{
                ...carosuelSubtitleVariants,
                animate: {
                  ...carosuelSubtitleVariants.animate,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.4,
                  },
                },
              }}
              className="text-xl sm:text-2xl xl:text-3xl text-shadecolorsix font-normal font-satoshi"
            >
              Bitter Leaf
            </motion.p>
          </div>

          <motion.div
            variants={{
              ...imageContainerVariants,
              animate: {
                ...imageContainerVariants.animate,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3,
                },
              },
            }}
            className="relative 2xl:mr-[5rem] shrink-0 self-end"
          >
            <motion.div
              variants={{
                ...floatingIndicatorVariants,
                animate: {
                  ...floatingIndicatorVariants.animate,
                  transition: {
                    duration: 0.5,
                    ease: "backOut",
                    delay: 0.8,
                  },
                },
              }}
              className="flex items-center justify-center rounded-full size-8 bg-white bottom-28 z-10 -left-[10rem] xl:-left-[16rem] absolute"
            >
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="size-5 rounded-full bg-lightgreen"
              />
            </motion.div>

            <motion.div
              variants={{
                ...listsContainer,
                animate: {
                  ...listsContainer.animate,
                  transition: {
                    ...listsContainer.animate.transition,
                  },
                },
              }}
              className="absolute bg-lightgreen rounded-xl p-4 pl-8 w-xs -left-[10rem] xl:-left-[16rem] bottom-3 "
            >
              <motion.ul className="list-disc text-lg text-white font-satoshi font-normal">
                {["Used in culinary", "Medicinal use", "Native to Yoruba land"].map(
                  (item, index) => {
                    return (
                      <motion.li key={index} variants={{ ...listItems(index) }}>
                        {item}
                      </motion.li>
                    );
                  }
                )}
              </motion.ul>
            </motion.div>
            <motion.div
              variants={{
                ...carosuelImageVariants,
                animate: {
                  ...carosuelImageVariants.animate,
                  transition: {},
                },
              }}
              className="border border-white overflow-hidden h-[22rem] rounded-[6rem] w-[12rem]"
            >
              <motion.img
                variants={{
                  ...imageVariants,
                  animate: {
                    ...imageVariants.animate,
                    transition: {
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.5,
                    },
                  },
                }}
                src={EwuroImage}
                alt=""
                className="object-cover object-center w-full h-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <StepIndicators
          handleCarouselViewChange={handleCarouselViewChange}
          currentCarouselView={currentCarouselView}
        />
      </div>

      <div className="flex mx-auto gap-2 mt-10 max-w-xl justify-between">
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

          <button className=" disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            <span className="flex items-center justify-center h-9 w-9 rounded-[5px] bg-lightgoldcolorfive hover:bg-opacity-80 transition-colors">
              <StopIcon className="h-5 w-5 fill-black" />
            </span>
          </button>

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

        <div className="flex items-center gap-3">
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
    </div>
  );
};

const getActiveConfig = (status: boolean) => {
  switch (status) {
    case true:
      return {
        "btn-color": "bg-lightgoldcolorfive",
        "span-color": "bg-primarygoldcolor",
      };

    case false:
      return {
        "btn-color": "bg-lightgoldcolorfive",
        "span-color": "bg-lightgoldcolorthree",
      };

    default:
      return {
        "btn-color": "bg-lightgoldcolorfive",
        "span-color": "bg-lightgoldcolorthree",
      };
  }
};

interface StepIndicatorProps {
  handleCarouselViewChange: (index: number) => void;
  currentCarouselView: number;
}

const StepIndicators = ({ handleCarouselViewChange, currentCarouselView }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: 5 }, (_, index) => {
        const isActive = currentCarouselView === index;

        return (
          <button
            key={index}
            onClick={() => handleCarouselViewChange(index)}
            className={classNames(
              "rounded-full h-5 w-5 flex items-center justify-center cursor-pointer transition-colors",
              getActiveConfig(isActive)?.["btn-color"]
            )}
          >
            <span
              className={classNames(
                "rounded-full h-3 w-3 block transition-colors",
                getActiveConfig(isActive)?.["span-color"]
              )}
            ></span>
          </button>
        );
      })}
    </div>
  );
};
