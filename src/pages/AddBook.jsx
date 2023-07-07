import React, { useState } from "react";
import { useBookData } from "../context/Context";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const AddBook = () => {
  const { books, setBooks } = useBookData();
  const [item, setItem] = useState({});

  const handleAddBook = (e) => {
    e.preventDefault();
    if (parseInt(item.pages) > 0) {
      setBooks([...books, item]);
      toast.success("Book added successfully !");
    } else {
      toast.error("Please enter a valid page number !");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, id: uuidv4(), [name]: value });
  };

  return (
    <div className="w-full h-full bg-white rounded-md px-4 py-8 flex flex-col justify-center items-center overflow-scroll">
      <form onSubmit={handleAddBook}>
        <div className="mb-4">
          Book Name:
          <input
            name="title"
            onChange={handleChange}
            required
            type="text"
            placeholder="Enter book name"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          Author:
          <input
            name="author"
            onChange={handleChange}
            required
            type="text"
            placeholder="Enter author name/names"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          Category:
          <input
            name="category"
            onChange={handleChange}
            type="text"
            placeholder="Enter category/categories"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          Summary:
          <input
            name="summary"
            onChange={handleChange}
            type="text"
            placeholder="Enter summary content"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          Pages:
          <input
            name="pages"
            onChange={handleChange}
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
              value={true}
              type="radio"
              name="stock"
              onClick={handleChange}
              className="mx-2"
            />
          </div>
          <div>
            <label htmlFor="no">No</label>
            <input
              value={false}
              type="radio"
              name="stock"
              onClick={handleChange}
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
