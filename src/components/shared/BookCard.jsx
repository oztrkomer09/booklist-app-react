import React from "react";
import toast from "react-hot-toast";
import { useBookData } from "../../context/Context";

const BookCard = ({ book }) => {
  const { books, setBooks, setModalBook, openModal } = useBookData();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((book) => book.id !== id));
      toast.success("Book deleted successfully !");
    } else {
    }
  };

  const handleModalItem = (book) => {
    setModalBook(book);
    openModal();
  };

  return (
    <div
      onClick={() => handleModalItem(book)}
      className="z-50 relative group flex flex-col justify-center px-4 border-3 gap-y-1 bg-gray-100 w-72 h-72 border-2 shadow-xl hover:shadow-2xl hover:shadow-gray-400 transition-all rounded-sm capitalize cursor-default"
    >
      <button
        onClick={() => handleDelete(book.id)}
        className="absolute z-50 top-5 right-5 hidden group-hover:block cursor-pointer hover:text-red-700 hover:font-bold hover:scale-105 transition-all "
      >
        X
      </button>

      <h1 className="border-b-2 border-black mb-2">
        <b>Title:</b> {book.title}
      </h1>

      <p>
        <b>Author:</b> {book.author.split(",").join(", ")}
      </p>
      <p>
        <b>Category:</b> {book.category.split(",").join(", ")}
      </p>
      <p>
        <b>Pages:</b> {book.pages}
      </p>
      <div className="flex gap-x-2">
        <b>Stock:</b>
        <p
          className={`${
            book.stock === true
              ? "bg-green-800"
              : book.stock === false
              ? "bg-red-800"
              : "bg-gray-800"
          } px-2 text-white rounded-sm`}
        >
          {book.stock === undefined ? "Unknown" : book.stock.toString()}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
