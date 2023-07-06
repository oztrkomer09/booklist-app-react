// TODO :: Here is the place where we displays the books. Therefore we better give here a single behaviour which is displaying the books
import React, { useState, useEffect } from "react";
import { useBookData } from "../context/Context";
import BookCard from "../components/shared/BookCard";
import SearchBar from "../components/shared/SearchBar";
import Modal from "../components/shared/Modal";

const DisplayBooks = () => {
  const { books } = useBookData();
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    setBooklist(books);
  }, [books]);

  return (
    <div className="w-full h-full relative bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 px-4 py-24 place-items-center overflow-scroll">
      <Modal />
      <SearchBar setBooklist={setBooklist} />
      {booklist.map((book) => {
        return <BookCard key={book.title} book={book} />;
      })}
    </div>
  );
};

export default DisplayBooks;
