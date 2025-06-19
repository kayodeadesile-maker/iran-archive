import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Home() {
  const [serachText, setSearchText] = useState<string>("");

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SeearcComponent
        searchText={serachText}
        handleSearch={(serachText) => setSearchText(serachText)}
        handleClearSearch={() => setSearchText("")}
      />
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
