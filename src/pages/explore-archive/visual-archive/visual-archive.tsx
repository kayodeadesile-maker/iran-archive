import VisualCoverImage from "@/assets/visuals/visual-cover-image.jpg";

import IllustratedCoverImage from "@/assets/visuals/illustrated-cover-image.jpg";
import PhotoGalleryCoverImage from "@/assets/visuals/gallery-cover-image.jpg";
import VidoeFilesCoverImage from "@/assets/visuals/video-cover-image.jpg";
import YorubaArtifactsCoverImage from "@/assets/visuals/artifacts-cover-image.jpg";
import AudioFilesCoverImage from "@/assets/visuals/audio-cover-image.jpg";
import HeritageSitesCoverImage from "@/assets/visuals/heritage-cover-image.jpg";
import { classNames } from "@/utils";

import { motion } from "framer-motion";

const VisualArchive = () => {
  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Visual Hero section start */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={VisualCoverImage}
            alt="proverbs cover image"
            title="proverbs cover image"
            className="h-full w-full absolute inset-0 object-cover"
          />
          <div className="flex flex-col min-h-[250px] lg:min-h-[350px] justify-center relative z-10 p-4 xl:p-6">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-inter font-bold text-white mb-1 auto-translate leading-xs-normal">
              In the dust of their journey, <br className="hidden sm:block" /> stories rise.
            </h1>
            <p className="font-satoshi font-normal text-lg sm:text-xl lg:text-2xl text-shadecolorseven leading-relaxed max-w-3xl">
              Explore Yoruba heritage through a different lens
            </p>
          </div>

          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        {/* Visual Hero section start */}

        {/* Visual Categories section start */}
        <Categories />
        {/* Visual Categories section end */}
      </div>
    </section>
  );
};

export default VisualArchive;

const categories = [
  {
    label: "illustrated stories",
    image: IllustratedCoverImage,
  },
  {
    label: "photo gallery",
    image: PhotoGalleryCoverImage,
  },
  {
    label: "video files",
    image: VidoeFilesCoverImage,
  },
  {
    label: "yoruba artifacts",
    image: YorubaArtifactsCoverImage,
  },
  {
    label: "audio files",
    image: AudioFilesCoverImage,
  },
  {
    label: "heritage sitess",
    image: HeritageSitesCoverImage,
  },
];

const Categories = () => {
  const gridContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardItem = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="mt-20">
      <h2 className="text-xl lg:text-2xl mb-2 font-semibold font-inter">Categories</h2>

      <motion.div
        variants={{
          ...gridContainer,
          animate: {
            ...gridContainer.animate,
            transition: {
              ...gridContainer.animate.transition,
              duration: 0.8,
              delayChildren: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="p-4 sm:p-6 rounded-3xl bg-lightgoldcolorsix grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3"
      >
        {categories.map((props, index) => {
          const { image, label } = props;

          return (
            <motion.div
              variants={{
                ...cardItem,
                animate: {
                  ...cardItem.animate,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              key={label}
              className={classNames(
                "relative rounded-2xl overflow-hidden",
                index !== 1 && "h-[200px]",
                index === 1
                  ? "xl:row-span-2 h-[200px] xl:h-auto"
                  : index === 2
                  ? "xl:col-span-3"
                  : index === 4
                  ? "xl:col-span-2"
                  : "col-span-1"
              )}
            >
              <div className="h-full w-full relative p-4 before:absolute before:content-[' '] before:block before:inset-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/5 before:to-black before:z-10">
                <img
                  src={image}
                  alt={label}
                  className="absolute h-full w-full inset-0 object-cover object-center"
                />
                <div className="h-full w-full z-20 flex justify-end flex-col relative">
                  <p className="capitalize text-lg font-satoshi font-medium text-white relative">
                    {label}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
