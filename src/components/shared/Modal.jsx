import React from "react";
import { useBookData } from "../../context/Context";

// TODO :: Modal should have its own functionality logic
function Modal() {
  const { isModalOpen, closeModal, modalBook } = useBookData();

  return (
    <div
      className={`${
        isModalOpen ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-[#00000080] z-50 `}
    >
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-5 rounded-sm max-w-[400px] w-full max-h-[80%] overflow-auto">
        <h1 className="border-b-2 border-black mb-2">{modalBook.title}</h1>
        <p>{modalBook.summary}</p>
        <button
          onClick={closeModal}
          className="absolute top-2 right-3 cursor-pointer text-2xl hover:text-red-700 hover:font-bold hover:scale-105 transition-all "
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
