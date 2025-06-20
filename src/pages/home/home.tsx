import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import HistoricalImage from "@/assets/historical-image.png";
import VisualArchivesImage from "@/assets/visual-archives-image.png";
import OralTraditionImage from "@/assets/oral-tradition-image.png";

const FeaturedImages = {
  historical: HistoricalImage,
  visual: VisualArchivesImage,
  oral: OralTraditionImage,
};

type QuickLinkCardProps = {
  href: string;
  label: string;
};

const QuickLinkCard = ({ href, label }: QuickLinkCardProps) => {
  return (
    <Link to={href} className="block flex-grow shrink-0 group">
      <div className="p-4 bg-goldcolor rounded-2xl group-hover:bg-goldcolor/90 transition-colors">
        <p className="text-white text-sm sm:text-base font-medium capitalize text-center">
          {label}
        </p>
      </div>
    </Link>
  );
};

type ArchiveCardComponentProps = {
  imageLink: string;
  description?: string;
  title: string;
};

const ArchiveCardComponent = ({ imageLink, description, title }: ArchiveCardComponentProps) => {
  return (
    <div className="bg-backgroundcolor p-4 rounded-xl">
      <header className="min-h-40 overflow-hidden rounded-lg">
        <img src={imageLink} alt={title} className="object-center object-cover h-full w-full" />
      </header>

      <div className="mt-4">
        <h3 className="sm:text-lg font-medium capitalize">{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default function Home() {
  const [serachText, setSearchText] = useState<string>("");

  return (
    <div className="max-w-7xl mx-auto pt-10">
      {/* Search bar start */}
      <SeearcComponent
        searchText={serachText}
        handleSearch={(serachText) => setSearchText(serachText)}
        handleClearSearch={() => setSearchText("")}
      />
      {/* Search bar end */}

      {/* Quick links start */}
      <div className="p-4 bg-backgroundcolor flex items-center flex-wrap mt-10 rounded-2xl gap-2">
        <QuickLinkCard label="proverbs" href="" />
        <QuickLinkCard label="history" href="" />
        <QuickLinkCard label="vegetables" href="" />
        <QuickLinkCard label="herbs" href="" />
        <QuickLinkCard label="plants" href="" />
        <QuickLinkCard label="heroes" href="" />
        <QuickLinkCard label="naming traditions" href="" />
      </div>
      {/* Quick links end */}

      {/* Featured Archive start */}
      <div className="mt-8">
        <h1 className="text-xl lg:text-2xl font-medium mb-2">Featured Archives</h1>

        <div className="grid grd-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ArchiveCardComponent
            title="historical moments & events"
            imageLink={FeaturedImages.historical}
          />
          <ArchiveCardComponent title="visual archives" imageLink={FeaturedImages.visual} />
          <ArchiveCardComponent title="oral traditions" imageLink={FeaturedImages.oral} />
        </div>
      </div>
      {/* Featured Archive end */}
    </div>
  );
}

type SearchComponentProps = {
  searchText: string;
  handleSearch: (searchText: string) => void;
  handleClearSearch: () => void;
};

const SeearcComponent = ({ searchText, handleClearSearch, handleSearch }: SearchComponentProps) => {
  return (
    <fieldset className="max-w-2xl mx-auto">
      <label htmlFor="search" className="sr-only"></label>
      <div className="relative">
        <button
          className="flex items-center justify-center h-6 w-6 rounded-full absolute top-1/2 left-2 -translate-y-1/2"
          title="clear search"
          type="button"
        >
          <MagnifyingGlassIcon className="h-5 text-textcolor" strokeWidth={2} />
        </button>
        <input
          className="block w-full rounded-3xl border text-sm border-gray-400 pl-10 pr-3 py-2  placeholder-textcolor text-gray-500 focus:ring-indigo-500 sm:text-sm outline-0 focus:ring-2"
          type="search"
          name="search"
          id="search"
          value={searchText}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          placeholder="What do you want to know about Yoruba Heritage?"
        />

        {searchText && (
          <button
            className="flex items-center justify-center h-6 w-6 rounded-full absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
            title="clear search"
            type="button"
            onClick={handleClearSearch}
          >
            <XMarkIcon className="h-3" />
          </button>
        )}
      </div>
    </fieldset>
  );
};
