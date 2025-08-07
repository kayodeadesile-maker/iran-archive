import heroesCoverImage from "@/assets/heroes-and-legend-cover-image.jpg";
import monarchIcon from "@/assets/svgs/monarch-icon.svg";
import warriorsIcon from "@/assets/svgs/warriors-icon.svg";
import heroesIcon from "@/assets/svgs/heroes-icon.svg";
import legendsIcon from "@/assets/svgs/legends-icon.svg";
import iconsIcon from "@/assets/svgs/icons-icon.svg";

const HEROES_CATEGORIES: HeroesCategoryProps[] = [
  {
    categoryName: "Monarchs",
    iconSrc: monarchIcon,
    altName: "Monarchs",
  },
  {
    categoryName: "Warriors",
    iconSrc: warriorsIcon,
    altName: "Warriors",
  },
  {
    categoryName: "Heroes",
    iconSrc: heroesIcon,
    altName: "Heroes",
  },
  {
    categoryName: "Legends",
    iconSrc: legendsIcon,
    altName: "Legends",
  },
  {
    categoryName: "Icons",
    iconSrc: iconsIcon,
    altName: "Icons",
  },
];

interface HeroesCategoryProps {
  categoryName: string;
  iconSrc: string;
  altName?: string;
}

const HeroesCategory = ({
  categoryName,
  iconSrc,
  altName = categoryName,
}: HeroesCategoryProps) => {
  return (
    <button className="flex flex-col items-center space-x-2 bg-lightgoldcolorfive w-[168px] h-[96px] p-4 rounded-xl cursor-pointer">
      <img src={iconSrc} alt={altName} />
      <span>{categoryName}</span>
    </button>
  );
};

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
        <div className="bg-lightgoldcolorsix p-4 rounded-xl">
          <p className="mb-4">Sort by category</p>
          <div className="grid grid-cols-5">
            {HEROES_CATEGORIES.map((cat) => (
              <HeroesCategory
                categoryName={cat.categoryName}
                iconSrc={monarchIcon}
                altName={cat.altName}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-4xl lg:text-3xl font-bold">
            Top Picks
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroesAndLegends;
