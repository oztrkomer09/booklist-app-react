import React, { useState, useEffect } from "react";
import { useBookData } from "../context/Context";
import BookCard from "../components/shared/BookCard";
import { toast } from "react-hot-toast";
import Modal from "../components/shared/Modal";

const DisplayBooks = () => {
  const [booklist, setBooklist] = useState([]);
  const { books, setBooks } = useBookData();

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    setBooklist(books);
  }, [books]);

  return (
    <div className="w-full h-full relative bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 px-4 py-24 place-items-center overflow-scroll">
      <div className="absolute top-5 left-1/2  -translate-x-1/2 shadow-md">
        <input
          onChange={(e) => {
            setBooklist(
              books.filter((book) =>
                book.title.toLowerCase().includes(e.target.value)
              )
            );
            console.log(localStorage.getItem("books"));
          }}
          type="text"
          placeholder="Search by title"
          className="border rounded-md px-3 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {booklist.map((book) => {
        return (
          <div key={book.id} onClick={openModal} className="relative group">
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h1>{book.title}</h1>
              <p>{book.summary}</p>
            </Modal>
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