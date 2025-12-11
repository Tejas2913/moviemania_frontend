import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import MovieForm from "./components/MovieForm";
import ReviewForm from "./components/ReviewForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<MovieGrid />} />
          <Route path="/add" element={<MovieForm />} />
          <Route path="/reviews" element={<ReviewForm />} />
        </Routes>
      </main>
      <Footer />

    </BrowserRouter>
  );
}
