import VisualCoverImage from "@/assets/visuals/visual-cover-image.jpg";

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
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-inter font-bold text-white mb-1 auto-translate leading-xs-normal">
              In the dust of their journey, <br className="hidden sm:block" /> stories rise.
            </h1>
            <p className="font-satoshi font-normal text-base sm:text-lg lg:text-2xl text-shadecolorseven leading-relaxed max-w-3xl">
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

const Categories = () => {
  return (
    <section className="mt-20">
      <h2 className="text-xl lg:text-2xl mb-2 font-semibold font-inter">Categories</h2>

      <div className="p-4 sm:p-6 rounded-2xl bg-lightgoldcolorsix grid"></div>
    </section>
  );
};
