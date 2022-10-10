import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}
