import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../../common/apis/movieAPI";
import { movieApiKey } from "../../common/apis/movieAPIkey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const title = "x-men";
    const response = await movieAPI.get(
      `?apikey=${movieApiKey}&s=${title}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const title = "heroes";
    const response = await movieAPI.get(
      `?apikey=${movieApiKey}&s=${title}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id) => {
    const response = await movieAPI.get(
      `?apikey=${movieApiKey}&i=${id}&plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  details: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfiled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },

    [fetchAsyncShows.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fulfiled");
      return { ...state, shows: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("rejected");
    },

    [fetchAsyncDetails.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("fulfiled");
      return { ...state, details: payload };
    },
    [fetchAsyncDetails.rejected]: () => {
    },
  },
});

export const { addMovie } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetails = (state) => state.movies.details;

export default movieSlice.reducer;
