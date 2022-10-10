import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
