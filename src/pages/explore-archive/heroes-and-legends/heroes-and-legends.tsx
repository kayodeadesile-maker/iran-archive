import heroesCoverImage from "@/assets/heroes-and-legend-cover-image.jpg"

const HeroesAndLegends = () => {
  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={heroesCoverImage}
            alt="proverbs cover image"
            title="proverbs cover image"
            className="h-full w-full absolute inset-0 object-cover"
          />
          <div className="flex flex-col min-h-[250px] lg:min-h-[340px] justify-center relative z-10 p-4 xl:p-6">
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-inter font-bold text-white mb-1 auto-translate">
              Reincarnating the Dead,
              <br /> Celebrating Living Legends.
            </h1>
            <p className="font-satoshi font-normal text-base sm:text-lg lg:text-2xl text-shadecolorseven leading-relaxed max-w-3xl">
              Telling the stories that shaped us, from ancient warriors to
              present-day icons.
            </p>
          </div>
          <div className="absolute inset-0 bg-[rgba(10,11,14,0.5)]"></div>
        </div>
        <div className="bg-lightgoldcolorfive p-4 rounded-xl">
          <p>Sort by category</p>
        </div>
      </div>
    </section>
  );
}

export default HeroesAndLegends;