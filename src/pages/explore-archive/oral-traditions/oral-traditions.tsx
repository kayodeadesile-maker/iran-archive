import oralTraditionCoverImage from "@/assets/oral-tradition-cover-photo.jpg"

const OralTraditions = () => {
  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={oralTraditionCoverImage}
            alt="proverbs cover image"
            title="proverbs cover image"
            className="h-full w-full absolute inset-0 object-cover"
          />
          <div className="flex flex-col min-h-[250px] lg:min-h-[340px] justify-center relative z-10 p-4 sm:p-6 xl:p-8">
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-inter font-bold text-white mb-1 auto-translate leading-xs-normal">
              Yoruba Oral Tradition
            </h1>
            <p className="font-satoshi font-normal text-base sm:text-lg lg:text-2xl text-shadecolorseven leading-relaxed">
              Voices of the past, shaping today and tomorrow
            </p>
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>
    </section>
  );
};

export default OralTraditions;
