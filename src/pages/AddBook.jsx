import React, { useEffect, useState } from "react";
import { useBookData } from "../context/Context";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const AddBook = () => {
  const { books, setBooks } = useBookData();
  // TODO :: Let's collect all book information info a single object
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState([]);
  const [category, setCategory] = useState([]);
  const [summary, setSummary] = useState("");
  const [pages, setPages] = useState(undefined);
  const [stock, setStock] = useState(undefined);
  const [item, setItem] = useState({});

  const handleAddBook = (e) => {
    e.preventDefault();
    if (pages > 0) {
      setBooks([...books, item]);
      setTitle("");
      setAuthors([]);
      setCategory([]);
      setSummary("");
      setPages(undefined);
      setStock(undefined);
      console.log(item);
      toast.success("Book added successfully !");
    } else {
      toast.error("Please enter a valid page number !");
    }
  };

  useEffect(() => {
    setItem({
      id: uuidv4(),
      title: title,
      author: authors,
      category: category,
      summary: summary,
      pages: pages,
      stock: stock,
    });
  }, [title, authors, category, pages, stock]); // Caution :: always question long dependency array for useEffect, useMemo and useCallback

  return (
    <div className="w-full h-full bg-white rounded-md px-4 py-8 flex flex-col justify-center items-center overflow-scroll">
      <form onSubmit={handleAddBook}>
        <div className="mb-4">
          Book Name:
          {/**
           * TODO :: Let's create an Input component and use it here
           */}
          <input
            onChange={(e) => setTitle(e.target.value)}
            required
            type="text"
            placeholder="Enter book name"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          Author:
          <input
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            required
            type="text"
            placeholder="Enter author name/names"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          Category:
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Enter category/categories"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          Summary:
          <input
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            type="text"
            placeholder="Enter summary content"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          Pages:
          <input
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            type="number"
            min={1}
            placeholder="Enter page number"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 flex gap-x-4 items-center">
          Stock:
          <div>
            <label htmlFor="yes">Yes</label>
            <input
              id="yes"
              type="radio"
              name="stock"
              onClick={() => setStock(true)}
              className="mx-2"
            />
          </div>
          <div>
            <label htmlFor="no">No</label>
            <input
              id="no"
              type="radio"
              name="stock"
              onClick={() => setStock(false)}
              className="mx-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all duration-75"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
