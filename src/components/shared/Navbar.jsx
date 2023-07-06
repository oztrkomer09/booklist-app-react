import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" border-gray-200 bg-gradient-to-r from-black to-gray-800">
      <div className="w-full flex justify-between px-4 py-6">
        <Link
          to="/"
          className="cursor-pointer font-bold text-lg text-green-500"
        >
          Booklist App
        </Link>
        <div className="flex gap-x-4 text-white">
          <Link to="/display" className="hover:text-blue-600 transition-all">
            Display Books
          </Link>
          <Link to="/add" className="hover:text-blue-600 transition-all">
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
