import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  favouriteMovies: [],
  currentPage: 1,
  maxPages: 1,
  selected: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, { payload: { movies, maxPages } }) => {
      state.movies = movies;
      state.maxPages = maxPages;
    },

    updateMaxPageCount: (state, { payload: { maxPages } }) => {
      state.maxPages = maxPages;
    },

    setCurrentPage: (state, { payload: { page } }) => {
      state.currentPage = page;
    },

    setFavMovie: (state, { payload: { favourite } }) => {
      state.favouriteMovies = [favourite, ...state.favouriteMovies];
      state.selected = [...state.selected, favourite.title];
    },

    updateMovie: (state, { payload: { title, selected } }) => {
      state.movies = state.movies.map((movie) => {
        if (movie.title === title) {
          return { ...movie, selected: selected };
        } else return { ...movie };
      });
    },

    deleteFavMovie: (state, { payload: { title } }) => {
      state.favouriteMovies = state.favouriteMovies.filter(
        (movie) => movie.title !== title
      );
      state.selected = state.selected.filter((item) => item !== title);
    },

    clearSore: (state) => {
      state.movies = [];
      state.currentPage = 1;
      state.maxPages = 1;
      state.selected = [];
      state.favouriteMovies = [];
    },
  },
});

export const {
  setMovies,
  setFavMovie,
  updateMaxPageCount,
  setCurrentPage,
  deleteFavMovie,
  updateMovie,
  setSelected,
  clearSore,
} = moviesSlice.actions;
export default moviesSlice.reducer;
