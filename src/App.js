import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DisplayBooks from "./pages/DisplayBooks";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter>
      <Layout className="w-full h-full">
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/display" element={<DisplayBooks />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
