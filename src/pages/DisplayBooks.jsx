// TODO :: Here is the place where we displays the books. Therefore we better give here a single behaviour which is displaying the books
import React, { useState, useEffect } from "react";
import { useBookData } from "../context/Context";
import { toast } from "react-hot-toast";
import BookCard from "../components/shared/BookCard";
import Modal from "../components/shared/Modal";
import SearchBar from "../components/shared/SearchBar";

const DisplayBooks = () => {
  const [booklist, setBooklist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { books, setBooks } = useBookData();

  useEffect(() => {
    setBooklist(books);
  }, [books]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((book) => book.id !== id));
      toast.success("Book deleted successfully !");
    } else {
    }
  };

  return (
    <div className="w-full h-full relative bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 px-4 py-24 place-items-center overflow-scroll">
      <SearchBar setBooklist={setBooklist} />
      {booklist.map((book) => {
        // TODO :: this iteration should only contains BookCard comoponent
        return (
          <div key={book.id} onClick={openModal} className="relative group">
            {/* // TODO :: do not render Modal component for each book. One modal should be enough.*/}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h1>{book.title}</h1>
              <p>{book.summary}</p>
            </Modal>
            {/* // TODO :: BookCard component should have the delete functionality */}
            <button
              onClick={() => handleDelete(book.id)}
              className="absolute z-50 top-5 right-5 hidden group-hover:block cursor-pointer hover:text-red-700 hover:font-bold hover:scale-105 transition-all "
            >
              X
            </button>
            <BookCard book={book} />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayBooks;
