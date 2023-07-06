import React, { useState } from "react";

// TODO :: Modal should have its own functionality logic
function Modal({ isOpen, onClose, children }) {
  const modalStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  };

  const contentStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "4px",
    maxWidth: "400px",
    width: "100%",
    maxHeight: "80%",
    overflow: "auto",
  };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        {children}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer hover:text-red-700 hover:font-bold hover:scale-105 transition-all "
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
