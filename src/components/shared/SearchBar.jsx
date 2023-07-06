import React from "react";
import { useBookData } from "../../context/Context";

const SearchBar = ({ setBooklist }) => {
  const { books } = useBookData();

  const handleSearch = (event) => {
    const {
      target: { value: searchParam },
    } = event;
    const matchedBooks = books.filter(({ title }) =>
      title.toLowerCase().includes(searchParam)
    );
    setBooklist(matchedBooks);
  };

  return (
    <div className="absolute top-5 left-1/2  -translate-x-1/2 shadow-md">
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search by title"
        className="border rounded-md px-3 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
