import GalleryCoverImage from "@/assets/gallery/gallery-cover-image.png";
import GanGanCoverImage from "@/assets/gallery/gangan-cover-image.png";

import OjudeObaImage from "@/assets/gallery/ojude-oba.png";
import EyoImage from "@/assets/gallery/eyo-image.png";
import OsunImage from "@/assets/gallery/osun.png";
import EgungunImage from "@/assets/gallery/egungun.png";
import React from "react";

const top_picks = [
  {
    image: OjudeObaImage,
    title: "Ojude Oba",
  },
  {
    image: EyoImage,
    title: "Eyo",
  },
  {
    image: OsunImage,
    title: "Osun Osogbo",
  },
  {
    image: EgungunImage,
    title: "Egungun Festival",
  },
];

export default function PhotoGallery() {
  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={GalleryCoverImage}
            alt="proverbs cover image"
            title="proverbs cover image"
            className="h-full w-full absolute inset-0 object-cover"
          />
          <div className="flex flex-col min-h-[250px] lg:min-h-[340px] justify-center relative z-10 p-4 xl:p-6">
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-inter font-bold text-white mb-1 auto-translate">
              Photo Gallery
            </h1>
            <p className="font-satoshi font-normal text-base sm:text-lg lg:text-2xl text-shadecolorseven leading-relaxed max-w-3xl">
              Dive into reality of Yoruba through pictures.
            </p>
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="mt-20">
          <h2 className="text-xl lg:text-2xl mb-2 font-semibold font-inter">360° Panoramic View</h2>
          <div className="grid grid-cols-1 mt-4">
            <div
              // onClick={() => navigate("/explore-archive/plants-and-vegetables/:plantId")}
              className="group relative overflow-hidden h-[35rem] w-full col-span-1 rounded-2xl before:absolute before:content-[' '] before:block before:inset-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/5 before:to-black/50 before:z-10"
            >
              <img
                src={GanGanCoverImage}
                alt="gan gan cover image"
                className="absolute h-full w-full inset-0 object-cover object-center"
              />

              <div className="relative z-20 h-full w-full flex flex-col justify-end-safe text-white cursor-pointer">
                <div className="p-6">
                  <h3 className="text-2xl font-semi-bold font-satoshi capitalize">Gan Gan</h3>
                  <p className="font-normal font-satoshi text-lg lg:text-xl">
                    Legendary Yoruba Queen, Heroine, liberator and warlord...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-xl lg:text-2xl mb-2 font-semibold font-inter">Top Picks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            {React.Children.toArray(
              top_picks.map((pick, idx) => {
                return <TopPickPhoto key={`${pick.title}-${idx}`} {...pick} />;
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TopPickPhotoProps {
  title: string;
  image: string;
}

const TopPickPhoto = (props: TopPickPhotoProps) => {
  const { image, title } = props;

  return (
    <div
      // onClick={() => navigate("/explore-archive/plants-and-vegetables/:plantId")}
      className="group relative overflow-hidden h-[20rem] w-full col-span-1 rounded-2xl before:absolute before:content-[' '] before:block before:inset-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/5 before:to-black/50 before:z-10"
    >
      <img
        src={image}
        alt={title}
        className="absolute h-full w-full inset-0 object-cover object-center"
      />

      <div className="relative z-20 h-full w-full p-6 flex flex-col justify-end-safe text-white cursor-pointer">
        <h3 className="text-2xl font-semi-bold font-satoshi capitalize">{title}</h3>
      </div>
    </div>
  );
};
