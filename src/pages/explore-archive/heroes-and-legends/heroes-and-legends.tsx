import heroesCoverImage from "@/assets/heroes-and-legend-cover-image.jpg";
import monarchIcon from "@/assets/svgs/monarch-icon.svg";
import warriorsIcon from "@/assets/svgs/warriors-icon.svg";
import heroesIcon from "@/assets/svgs/heroes-icon.svg";
import legendsIcon from "@/assets/svgs/legends-icon.svg";
import iconsIcon from "@/assets/svgs/icons-icon.svg";
import moremi from "@/assets/legends/moremi.jpg";
import awolowo from "@/assets/legends/awolowo.jpg";
import basorunGaa from "@/assets/legends/basorun-gaa.jpg";
import felaKuti from "@/assets/legends/fela-kuti.jpg";
import ayinlaOmowura from "@/assets/legends/ayinla-omowura.jpg";
import ogundareFoyanmu from "@/assets/legends/ogundare-foyanmu.jpg";
import funmiKuti from "@/assets/legends/funmilayo-kuti.jpg";
import { classNames } from "@/utils";
import { PaginationComponent } from "@/components/common/pagination/Pagination";
import { DonationComponent } from "@/components/common/donation/Donation";

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
const HEROES: HeroProps[] = [
  {
    heroName: "Moremi",
    heroImage: moremi,
    heroDescription: "Legendary Yoruba Queen, Heroine, liberator and warlord...",
  },
  {
    heroName: "Awolowo",
    heroImage: awolowo,
    heroDescription: "Politician, stateman, visionary, revolutionary...",
  },
  {
    heroName: "Basorun Gaa",
    heroImage: basorunGaa,
    heroDescription: "Nobleman, known for his military prowess, warlord in the old Oyo...",
  },
  {
    heroName: "Fela Anikulapo Kuti",
    heroImage: felaKuti,
  },
  {
    heroName: "Ayinla Omowura",
    heroImage: ayinlaOmowura,
  },
  {
    heroName: "Ogundare Foyanmu",
    heroImage: ogundareFoyanmu,
  },
  {
    heroName: "Funmilayo Ransome Kuti",
    heroImage: funmiKuti,
  },
  {
    heroName: "Ayinla Omowura",
    heroImage: ayinlaOmowura,
  },
  {
    heroName: "Ogundare Foyanmu",
    heroImage: ogundareFoyanmu,
  },
];

interface HeroesCategoryProps {
  categoryName: string;
  iconSrc: string;
  altName?: string;
}
interface HeroProps {
  heroName: string;
  heroImage: string;
  heroDescription?: string;
}

const HeroesCategory = ({ categoryName, iconSrc, altName = categoryName }: HeroesCategoryProps) => {
  return (
    <button className="flex flex-col items-center gap-4 bg-lightgoldcolorfive h-[96px] w-full p-4 rounded-xl cursor-pointer">
      <img src={iconSrc} alt={altName} />
      <span className="text-lg font-medium font-satoshi capitalize inline-block">
        {categoryName}
      </span>
    </button>
  );
};

const HeroesAndLegends = () => {
  return (
    <section className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={heroesCoverImage}
            alt="proverbs cover image"
            title="proverbs cover image"
            className="h-full w-full absolute inset-0 object-cover"
          />
          <div className="flex flex-col min-h-[250px] lg:min-h-[340px] justify-center relative z-10 p-4 sm:p-6 xl:p-8">
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-inter font-bold text-white mb-1 auto-translate leading-xs-normal">
              Reincarnating the Dead,
              <br /> Celebrating Living Legends.
            </h1>
            <p className="font-satoshi font-normal text-base sm:text-lg lg:text-2xl text-shadecolorseven leading-relaxed max-w-3xl">
              Telling the stories that shaped us, from ancient warriors to present-day icons.
            </p>
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Category Filter  start */}
        <div className="bg-lightgoldcolorsix p-4 rounded-xl mt-20">
          <p className="mb-4 font-inter font-medim text-lg">Sort by category</p>
          <div className="grid grid-cols-4 lg:grid-cols-5 gap-3">
            {HEROES_CATEGORIES.map((cat, idx) => (
              <div
                className={classNames(
                  "block flex-grow shrink-0 group",
                  idx === 2 ? "col-span-4 lg:col-span-1" : "col-span-2 lg:col-span-1"
                )}
              >
                <HeroesCategory
                  categoryName={cat.categoryName}
                  iconSrc={monarchIcon}
                  altName={cat.altName}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Category Filter  start */}

        {/* Horizontal dividing line start */}
        <hr className="my-10 border-[1.5px] border-lightgoldcolorone" />
        {/* Horizontal dividing line end */}

        {/* Top Picks  start */}
        <div className="mt-5">
          <h2 className="text-xl sm:text-4xl lg:text-3xl font-bold mb-5">Top Picks</h2>
          <div className="grid grd-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-5 mt-4">
            {HEROES.map((h) => (
              <div className="w-auto h-[272px] relative flex items-end p-4 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(79,89,116,0.3),_rgba(10,11,14,1))]"></div>
                <img
                  src={h.heroImage}
                  alt=""
                  className="h-full w-full absolute inset-0 object-cover -z-1"
                />
                <div className="z-1">
                  <p className="text-white text-xl font-medium font-satoshi capitalize">
                    {h.heroName}
                  </p>
                  <p className="text-white font-normal font-satoshi text-lg">{h.heroDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Top Picks end */}

        {/* <div>
          <h2 className="text-xl sm:text-4xl lg:text-3xl font-bold mb-5">Popular</h2>
          {Array.from({ length: 4 }).map(() => (
            <div className="grid grd-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-5 mt-4">
              {HEROES.slice(3).map((h) => (
                <div className="w-[233px] h-[232px] relative flex items-end p-4 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(79,89,116,0.3),_rgba(10,11,14,1))]"></div>
                  <img
                    src={h.heroImage}
                    alt=""
                    className="h-full w-full absolute inset-0 object-cover -z-1"
                  />

                  <p className="text-white z-1">{h.heroName}</p>
                </div>
              ))}
            </div>
          ))}
        </div> */}

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

export default HeroesAndLegends;
