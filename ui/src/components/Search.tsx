import React, { MouseEvent, useRef } from "react";

interface ISearchProps {
  onClickSearch: (name: string | undefined) => void;
}

const Search: React.FC<ISearchProps> = ({ onClickSearch }) => {
  const inputSearch = useRef<HTMLInputElement>(null);

  const onClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClickSearch(inputSearch?.current?.value)
  };
  return (
    <form>
      <div className="max-w-xl">
        <div className="flex space-x-4">
          <div className="flex rounded-md overflow-hidden w-full">
            <input
              data-testid="text-search" 
              type="text"
              ref={inputSearch}
              className="text-xl px-2 w-full rounded-md rounded-r-none"
              placeholder="Enter user"
            />
            <button
              data-testid="search-button" 
              className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md"
              onClick={onClickButton}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Search;
