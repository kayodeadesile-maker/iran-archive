import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React, { type JSX } from "react";
import { classNames } from "@/utils";

import PlantOne from "@/assets/plants/plant-one.jpg";
import PlantTwo from "@/assets/plants/plant-two.jpg";

import EfoTeteImage from "@/assets/plants/efo-tete.jpg";
import EfinrinImage from "@/assets/plants/ewe-efinrin.jpg";
import EwuroImage from "@/assets/plants/ewuro.jpg";
import EweAbamodaImage from "@/assets/plants/ewe-abamoda-one.jpg";

import EwerokoImage from "@/assets/plants/eweroko.jpg";
import EfoYanrinImage from "@/assets/plants/efo-yanrin.jpg";
import { PaginationComponent } from "@/components/common/pagination/Pagination";
import { DonationComponent } from "@/components/common/donation/Donation";

const Plants = () => {
  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Plants overview start */}
        <PlantsOverview />
        {/* Plants overview end */}

        {/* Plants category filter start */}
        <CategoriesFilter />
        {/* Plants category filter end */}

        {/* Top Pick Plants start */}
        <TopPickPlants />
        {/* Top Pick Plants end */}

        {/* Horizontal dividing line start */}
        <hr className="my-10 border-[1.5px] border-lightgoldcolorone" />
        {/* Horizontal dividing line end */}

        {/* Popular plants start */}
        <PopularPlants />
        {/* Popular plants end */}

        {/* Pagination start */}
        <div className="mt-20">
          <PaginationComponent
            hasNextPage={true}
            next={() => console.log("next")}
            prev={() => console.log("previous")}
            page={1}
            totalItems={50}
            totalPages={100}
            setPage={(v) => console.log(v)}
          />
        </div>
        {/* Pagination end */}

        {/* Donation start */}
        <DonationComponent />
        {/* Donation end */}
      </div>
    </section>
  );
};

export default Plants;

const PlantsOverview = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-y-9 gap-4">
      <div className="space-y-2 shrink-0 xl:max-w-xl 2xl:max-w-2xl xl:w-full">
        <div className="mx-auto sm:mx-0">
          <h1 className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-inter leading-[1.25]">
            Where Roots Speak
          </h1>
        </div>

        <p className="font-satoshi font-normal text-2xl leading-normal text-shadecolorfour">
          Uncovering the Forgotten <br className="hidden lg:block" /> Plants of Our Land
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-6">
        <div className="grid grid-cols-2 gap-3 row-span-2">
          <div className="col-span-2 overflow-hidden rounded-3xl w-2/3 place-self-end-safe h-full">
            <img src={PlantOne} alt="plant one" className="object-cover object-center h-full" />
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-3">
            <div className="col-span-1 bg-[#0C3924] text-white rounded-2xl lg:rounded-3xl flex flex-col p-3 justify-center h-2/3 md:h-1/2 xl:h-auto place-self-end-safe">
              <h2 className="font-satoshi text-lg font-medium">100%</h2>
              <p className="font-satoshi text-base md:text-lg font-normal">Native Yoruba</p>
            </div>

            <div className="col-span-1 overflow-hidden rounded-3xl">
              <img
                src={PlantTwo}
                alt="plant two"
                className="h-full object-cover object-center w-full"
              />
            </div>
          </div>
        </div>

        <div className="row-span-2 overflow-hidden rounded-3xl">
          <img
            src={EweAbamodaImage}
            alt="ewe abamoda"
            className="h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

// Categorie Folter component
const categories = [
  {
    label: "medicine",
    Icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.4117 9.88138C22.9336 9.31392 22.2355 8.98765 21.4954 8.98765H18.4159L23.1096 5.10545C23.6757 4.53899 23.9887 3.78436 23.9887 2.9827C23.9887 2.18104 23.6767 1.42642 23.1096 0.859958C21.9755 -0.275977 20.0312 -0.309004 18.835 0.894987L12.154 8.98765H2.50662C1.76651 8.98765 1.06841 9.31392 0.590337 9.88138C0.111268 10.4498 -0.0897617 11.1965 0.0372568 11.9281C0.586337 15.0897 2.3816 18.0091 4.87696 19.7625C5.42004 20.0768 6.00013 20.8124 6.00013 21.4069C6.00013 22.2846 5.28602 22.9992 4.40889 22.9992C4.13285 22.9992 3.90882 23.2234 3.90882 23.4996C3.90882 23.7758 4.13285 24 4.40889 24C4.4299 24 4.4489 23.994 4.4689 23.994C4.4799 23.994 4.48891 24 4.49891 24H19.5011C19.5121 24 19.5211 23.995 19.5311 23.994C19.5521 23.994 19.5711 24 19.5911 24C19.8671 24 20.0912 23.7758 20.0912 23.4996C20.0912 23.2234 19.8671 22.9992 19.5911 22.9992C18.714 22.9992 17.9999 22.2846 17.9999 21.4069C17.9999 20.8124 18.58 20.0768 19.159 19.7385C21.6184 18.0091 23.4137 15.0887 23.9627 11.9281C24.0898 11.1965 23.8887 10.4498 23.4097 9.88138H23.4117ZM19.5731 1.56754C20.3292 0.810917 21.6454 0.810917 22.4015 1.56754C22.7796 1.94585 22.9876 2.44826 22.9876 2.9827C22.9876 3.51714 22.7796 4.01956 22.4365 4.36584L16.8457 8.98765H13.4492L19.5731 1.56754ZM6.43919 22.9992C6.78524 22.5588 7.00027 22.0104 7.00027 21.4069C7.00027 20.9165 6.80524 20.4251 6.5212 19.9967H17.4828C17.1968 20.4271 17.0017 20.9175 17.0017 21.4069C17.0017 22.0094 17.2168 22.5578 17.5628 22.9992H6.43919ZM22.9806 11.7579C22.4755 14.6633 20.6853 17.4396 18.4749 18.9959H5.52906C3.28273 17.4156 1.52747 14.6623 1.0224 11.7579C0.946389 11.3176 1.06841 10.8682 1.35545 10.5259C1.64249 10.1846 2.06255 9.98847 2.50662 9.98847H21.4954C21.9394 9.98847 22.3595 10.1846 22.6466 10.5259C22.9336 10.8682 23.0556 11.3176 22.9796 11.7579H22.9806Z"
          fill="#0A0B0E"
        />
      </svg>
    ),
  },
  {
    label: "plant",
    Icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.991 12.535C20.793 7.274 17.231 7 16.5 7C15.306 7 13.58 7.523 12.5 9.155V6C12.5 0.289 8.751 0 8 0H7.5C5.751 0 3.178 1.618 3.009 6.035C1.311 6.275 0 7.737 0 9.5C0 12.176 3.018 15.225 3.146 15.354L3.5 15.708L3.854 15.354C3.982 15.226 7 12.177 7 9.5C7 7.743 5.699 6.285 4.01 6.037C4.164 2.352 6.149 1 7.5 1H8C8.821 1 11.5 1.36 11.5 6V24H12.5V13C12.5 8.14 16.091 8 16.5 8C17.293 8 19.818 8.336 19.99 12.537C18.301 12.784 17 14.243 17 16C17 18.676 20.018 21.725 20.146 21.854L20.5 22.208L20.854 21.854C20.982 21.726 24 18.677 24 16C24 14.237 22.689 12.774 20.991 12.535ZM6 9.5C6 11.273 4.264 13.412 3.5 14.267C2.736 13.413 1 11.277 1 9.5C1 8.122 2.122 7 3.5 7C4.878 7 6 8.122 6 9.5ZM20.5 20.767C19.736 19.913 18 17.777 18 16C18 14.622 19.122 13.5 20.5 13.5C21.878 13.5 23 14.622 23 16C23 17.773 21.264 19.912 20.5 20.767Z"
          fill="#0A0B0E"
        />
      </svg>
    ),
  },
  {
    label: "food",
    Icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_360_793)">
          <path
            d="M4.146 6.35351C3.407 5.61451 3 4.63151 3 3.58551V1.99951H4V3.58551C4 4.36451 4.303 5.09551 4.854 5.64651C5.593 6.38551 6 7.36851 6 8.41451V10.0005H5V8.41451C5 7.63551 4.697 6.90451 4.146 6.35351ZM9 7.41451V9.00051H10V7.41451C10 6.36851 9.593 5.38551 8.854 4.64651C8.303 4.09651 8 3.36451 8 2.58551V0.999512H7V2.58551C7 3.63151 7.407 4.61451 8.146 5.35351C8.697 5.90351 9 6.63551 9 7.41451ZM24 10.9555V12.0005C24 18.6175 18.617 24.0005 12 24.0005C5.383 24.0005 0 18.6165 0 11.9995C0 10.4995 0.283 8.99951 0.283 8.99951H1.29L1.354 9.42451C1.982 13.5415 4.092 15.9995 7 15.9995C10.037 15.9995 12 14.0375 12 10.9995C12 7.65651 14.211 5.26751 17.442 5.02051C17.12 2.40151 15.517 0.999512 14 0.999512V-0.000488281C15.99 -0.000488281 18.093 1.74951 18.448 5.01351C22.096 5.23151 24 8.10951 24 10.9545V10.9555ZM18 6.00051C16.619 6.00051 15.544 6.40251 14.75 7.04251L14.772 7.03151C15.414 8.24651 16.651 9.00051 18.001 9.00051C19.351 9.00051 20.581 8.25051 21.224 7.04051C20.431 6.40451 19.362 6.00051 18 6.00051ZM23 10.9555C23 9.84451 22.661 8.69351 21.951 7.78151C21.1 9.15851 19.614 10.0005 18 10.0005C16.386 10.0005 14.891 9.15251 14.041 7.76751C13.335 8.67951 13 9.84251 13 11.0005C13 14.5895 10.589 17.0005 7 17.0005C4.247 17.0005 2.11 15.2275 1.001 12.1425C1.077 18.1425 5.982 23.0005 12 23.0005C18.065 23.0005 23 18.0655 23 12.0005V10.9555Z"
            fill="#0A0B0E"
          />
        </g>
        <defs>
          <clipPath id="clip0_360_793">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "spiritual",
    Icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM1 12C1 5.98 5.87 1.07 11.88 1C14.72 1.07 17 3.4 17 6.25C17 8.9 14.74 11.25 11.96 11.5C8.68 11.8 6 14.6 6 17.75C6 19.48 6.71 21.05 7.85 22.19C3.83 20.55 1 16.6 1 12ZM12.12 23C9.28 22.93 7 20.6 7 17.75C7 15.1 9.26 12.75 12.04 12.5C15.32 12.2 18 9.4 18 6.25C18 4.52 17.29 2.95 16.15 1.81C20.17 3.45 23 7.4 23 12C23 18.02 18.13 22.93 12.12 23ZM11 6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6C13 6.55 12.55 7 12 7C11.45 7 11 6.55 11 6ZM13 18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18C11 17.45 11.45 17 12 17C12.55 17 13 17.45 13 18Z"
          fill="#0A0B0E"
        />
      </svg>
    ),
  },
  {
    label: "fruit",
    Icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.8181 14.1663C22.8785 12.1274 21.1192 10.5713 18.9841 9.86965C18.9211 5.14821 18.4113 0.00999459 15.4955 0H15.4845C12.7597 0 11.6501 4.28768 11.2053 7.31004C9.94086 7.03019 9.38809 7.0112 9.07722 7.00221C7.28596 6.94624 5.31878 7.59489 3.75843 8.76025L3.47455 8.97214L3.94935 10.4903L4.3252 10.4823C6.94111 10.4284 9.26314 10.8171 10.7685 11.158C10.1278 15.0778 7.39792 17.2207 5.21683 18.3131C2.85481 19.3305 1.60433 21.2555 1.1975 21.9891H0V22.9885H1.27047C1.62232 23.3384 2.57693 24 5.01191 24C6.63923 24 13.0336 21.6433 16.6391 18.3131C16.5522 17.9133 16.4572 17.5385 16.3572 17.1807C12.7178 20.8827 5.73361 23.0155 4.71204 22.9945V22.9885C3.16068 22.9885 2.41999 22.6207 2.11312 22.3989C2.50196 21.7272 3.61549 20.0901 5.63665 19.2186C9.06222 17.5055 11.1574 14.801 11.7391 11.3978C12.081 11.4898 12.3289 11.5647 12.4518 11.6047C13.3964 12.4612 15.9354 14.8689 17.0379 19.8113L17.1029 20.1041L18.5023 20.4939L18.6762 20.0951C19.6988 17.7354 19.5539 15.3057 19.118 13.9434C20.4035 14.1563 21.545 14.5701 22.5096 15.1738L22.7775 15.3407L24 14.5641L23.8171 14.1683L23.8181 14.1663ZM4.85798 9.47687H4.67905L4.64107 9.35793C5.95852 8.46541 7.57384 7.94769 9.05223 8.00266C9.33311 8.01066 9.8379 8.02565 11.0844 8.3075C11.2133 9.02011 11.4742 9.75571 11.888 10.4004C10.5416 10.0406 7.94269 9.47687 4.85798 9.47687ZM12.077 8.15558L12.098 8.15858C12.6397 3.74197 13.9372 1.00046 15.4865 1.00046H15.4915C17.0999 1.00645 17.9395 4.15175 17.9895 10.3414C17.4587 10.8521 16.3942 11.5637 14.7369 11.2519C12.8187 10.8871 12.2409 8.99413 12.077 8.15558ZM19.284 12.955L17.6716 12.6851L18.1674 14.2453C18.5503 15.4416 18.6072 17.4056 17.9365 19.2546C17.1089 15.8184 15.6215 13.5726 14.45 12.2124C14.483 12.2194 14.517 12.2264 14.5519 12.2334C16.4751 12.5952 17.9975 11.8166 18.8671 10.8801C20.4835 11.4628 21.8349 12.6112 22.6666 14.1044C21.675 13.5497 20.5394 13.1649 19.285 12.957L19.284 12.955Z"
          fill="#0A0B0E"
        />
      </svg>
    ),
  },
];

const CategoriesFilter = () => {
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [itemRef, itemInView] = useInView({
    threshold: 0.9,
    triggerOnce: false,
  });

  const categoriesContainerVariants = {
    hidden: {
      scale: 0.3,
      opacity: 0.2,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  const categoriesVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={categoriesContainerVariants}
      initial="hidden"
      animate={containerInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-4 bg-lightgoldcolorsix mt-20 rounded-2xl border border-gray-300"
    >
      <motion.h2
        initial={{
          y: 10,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-inter font-medim text-lg"
      >
        Sort by category
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 gap-3 mt-3">
        {React.Children.toArray(
          categories.map((category, idx) => {
            return (
              <motion.div
                key={`${category.label}-${idx}`}
                variants={categoriesVariants}
                initial="hidden"
                ref={itemRef}
                animate={itemInView ? "visible" : "hidden"}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.15, // Stagger delay only
                  ease: "easeOut",
                }}
                className={classNames(
                  "block flex-grow shrink-0 group",
                  idx === 2 ? "sm:col-span-2" : "sm:col-span-1 lg:col-span-2",
                  idx > 2 && "lg:col-span-3",
                  "xl:col-span-1"
                )}
              >
                <CategoryCard {...category} />
              </motion.div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};

interface CategoryCardProps {
  label: string;
  Icon: JSX.Element;
}

const CategoryCard = (props: CategoryCardProps) => {
  const { Icon, label } = props;

  return (
    <button
      type="button"
      title={label}
      className="group w-full cursor-pointer border border-gray-300 flex flex-col p-4 items-center justify-cenyer gap-4 rounded-xl bg-lightgoldcolorfive"
    >
      <span className="flex items-center justify-center">{Icon}</span>

      <p className="text-lg font-medium font-satoshi capitalize">{label}</p>
    </button>
  );
};

// Top Picks Component
const top_picks = [
  {
    image: EfoTeteImage,
    yorubaName: "efo tete",
    englishName: "green amaranth",
    description: "Efo Tete, also known as African spinach or green amaranth...",
  },
  {
    image: EfinrinImage,
    yorubaName: "efinrin",
    englishName: "scent leaf",
    description: "Scent leaves, also known as it is known as efinrin in Yoruba...",
  },
  {
    image: EwuroImage,
    yorubaName: "ewuro",
    englishName: "better leaf",
    description: "Bitter leaf comes in handy in the treatment of abdominal issues...",
  },
];

interface TopPickPlantCardProps {
  image: string;
  yorubaName: string;
  englishName: string;
  description: string;
}

const TopPickPlantCard = (props: TopPickPlantCardProps) => {
  const { image, yorubaName, englishName, description } = props;

  return (
    <div className="group relative overflow-hidden h-[20rem] border border-gray-300 w-full col-span-1 rounded-2xl before:absolute before:content-[' '] before:block before:inset-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/5 before:to-black before:z-10">
      <img
        src={image}
        alt={yorubaName}
        className="absolute h-full w-full inset-0 object-cover object-center"
      />

      <div className="relative z-20 h-full w-full p-6 flex flex-col justify-end-safe text-white cursor-pointer">
        <h3 className="text-2xl font-semi-bold font-satoshi capitalize">{yorubaName}</h3>
        <div className="mt-2">
          <h4 className="text-xl font-medium font-satoshi capitalize">{englishName}</h4>
          <p className="font-normal font-satoshi text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

const TopPickPlants = () => {
  return (
    <div className="mt-20">
      <h2 className="text-xl lg:text-2xl mb-2 font-semibold font-inter">Top Picks</h2>
      <div className="grid grd-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mt-4">
        {React.Children.toArray(
          top_picks.map((pick, idx) => {
            return <TopPickPlantCard key={`${pick.yorubaName}-${idx}`} {...pick} />;
          })
        )}
      </div>
    </div>
  );
};

// Popular
interface PopularPlantCardProps {
  image: string;
  yorubaName: string;
  englishName: string;
}

const popularPlants = [
  {
    image: EweAbamodaImage,
    yorubaName: "ewe abamoda",
    englishName: "miracle leaf",
  },
  {
    image: EwerokoImage,
    yorubaName: "eweroko",
    englishName: "fluted pumpkin leaf",
  },
  {
    image: EfoYanrinImage,
    yorubaName: "efo yanrin",
    englishName: "wild lettuce",
  },
  {
    image: EfinrinImage,
    yorubaName: "efinrin",
    englishName: "scent leaf",
  },
  {
    image: EweAbamodaImage,
    yorubaName: "ewe abamoda",
    englishName: "miracle leaf",
  },
  {
    image: EwerokoImage,
    yorubaName: "eweroko",
    englishName: "fluted pumpkin leaf",
  },
  {
    image: EfoYanrinImage,
    yorubaName: "efo yanrin",
    englishName: "wild lettuce",
  },
  {
    image: EfinrinImage,
    yorubaName: "efinrin",
    englishName: "scent leaf",
  },
  {
    image: EweAbamodaImage,
    yorubaName: "ewe abamoda",
    englishName: "miracle leaf",
  },
  {
    image: EwerokoImage,
    yorubaName: "eweroko",
    englishName: "fluted pumpkin leaf",
  },
  {
    image: EfoYanrinImage,
    yorubaName: "efo yanrin",
    englishName: "wild lettuce",
  },
  {
    image: EfinrinImage,
    yorubaName: "efinrin",
    englishName: "scent leaf",
  },
  {
    image: EweAbamodaImage,
    yorubaName: "ewe abamoda",
    englishName: "miracle leaf",
  },
  {
    image: EwerokoImage,
    yorubaName: "eweroko",
    englishName: "fluted pumpkin leaf",
  },
  {
    image: EfoYanrinImage,
    yorubaName: "efo yanrin",
    englishName: "wild lettuce",
  },
  {
    image: EfinrinImage,
    yorubaName: "efinrin",
    englishName: "scent leaf",
  },
];

const PopularPlantCard = (props: PopularPlantCardProps) => {
  const { image, yorubaName, englishName } = props;

  return (
    <div className="group relative overflow-hidden h-[16rem] border border-gray-300 w-full col-span-1 rounded-2xl before:absolute before:content-[' '] before:block before:inset-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/5 before:to-black before:z-10">
      <img
        src={image}
        alt={yorubaName}
        className="absolute h-full w-full inset-0 object-cover object-center"
      />

      <div className="relative z-20 h-full w-full p-6 flex flex-col justify-end-safe text-white cursor-pointer">
        <h3 className="text-2xl font-semi-bold font-satoshi capitalize">{yorubaName}</h3>
        <h4 className="text-xl font-medium font-satoshi capitalize">{englishName}</h4>
      </div>
    </div>
  );
};

const PopularPlants = () => {
  return (
    <div className="mt-5">
      <h2 className="text-xl lg:text-2xl mb-2 font-semibold font-inter">Popular</h2>
      <div className="grid grd-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-5 mt-4">
        {React.Children.toArray(
          popularPlants.map((pick, idx) => {
            return <PopularPlantCard key={`${pick.yorubaName}-${idx}`} {...pick} />;
          })
        )}
      </div>
    </div>
  );
};
