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
import { useNavigate } from "react-router-dom";

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
    heroDescription:
      "Legendary Yoruba Queen, Heroine, liberator and warlord...",
  },
  {
    heroName: "Awolowo",
    heroImage: awolowo,
    heroDescription: "Politician, stateman, visionary, revolutionary...",
  },
  {
    heroName: "Basorun Gaa",
    heroImage: basorunGaa,
    heroDescription:
      "Nobleman, known for his military prowess, warlord in the old Oyo...",
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

const HeroesCategory = ({
  categoryName,
  iconSrc,
  altName = categoryName,
}: HeroesCategoryProps) => {
  return (
    <button className="flex flex-col col-span-1 items-center space-y-2 bg-lightgoldcolorfive h-24 p-4 w-full rounded-xl cursor-pointer justify-center">
      <img src={iconSrc} alt={altName} />
      <span className="font-satoshi font-medium text-lg">{categoryName}</span>
    </button>
  );
};

const HeroesAndLegends = () => {
  const navigate = useNavigate()
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
          <div className="flex flex-col min-h-[250px] lg:min-h-[340px] justify-center relative z-10 p-4 sm:p-6 xl:p-8">
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-inter font-bold text-white mb-1 auto-translate leading-xs-normal">
              Reincarnating the Dead,
              <br /> Celebrating Living Legends.
            </h1>
            <p className="font-satoshi font-normal text-base sm:text-lg lg:text-2xl text-shadecolorseven leading-relaxed">
              Telling the stories that shaped us,{" "}
              <br className="hidden sm:block" /> from ancient warriors to
              present-day icons.
            </p>
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="bg-lightgoldcolorsix p-4 rounded-xl">
          <h3 className="mb-3 font-inter text-lg font-medium">
            Sort by category
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 xl:grid-cols-5">
            {HEROES_CATEGORIES.map((cat, idx) => (
              <div
                className={classNames(
                  idx == 2
                    ? "sm:col-span-2 lg:col-span-2"
                    : "sm:col-span-1 lg:col-span-2",
                  idx > 2 && "lg:col-span-3",
                  "xl:col-span-1"
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
        <div>
          <h2 className="text-xl sm:text-4xl lg:text-3xl font-bold mb-5">
            Top Picks
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {HEROES.slice(0, 3).map((h) => (
              <button
                onClick={() =>
                  navigate("/explore-archive/heroes-and-legends/heroOrLegendId")
                }
                className="w-full h-[17rem] relative flex items-end p-4 rounded-2xl overflow-hidden cursor-pointer"
                key={h.heroName}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(79,89,116,0.3),_rgba(10,11,14,1))]"></div>
                <img
                  src={h.heroImage}
                  alt=""
                  className="h-full w-full absolute inset-0 object-cover -z-1"
                />
                <div className="z-1">
                  <p className="text-white bold text-xl">{h.heroName}</p>
                  <p className="text-white text-xs">{h.heroDescription}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-4xl lg:text-3xl font-bold mb-5">
            Popular
          </h2>
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
                key={i}
              >
                {HEROES.slice(3).map((h) => (
                  <button
                    onClick={() =>
                      navigate(
                        "/explore-archive/heroes-and-legends/heroOrLegendId"
                      )
                    }
                    className="h-[232px] relative flex items-end p-4 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(79,89,116,0.3),_rgba(10,11,14,1))]"></div>
                    <img
                      src={h.heroImage}
                      alt=""
                      className="h-full w-full absolute inset-0 object-cover -z-1"
                    />

                    <p className="text-white z-1 text-xl">{h.heroName}</p>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
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
        {/* Donation Start */}
        <DonationComponent />
        {/* Donation End */}
      </div>
    </section>
  );
};

export default HeroesAndLegends;
