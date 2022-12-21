import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteFavMovie,
  setFavMovie,
  updateMovie,
} from "../features/movies/moviesSlice";
import Grid from "@mui/material/Grid";
import GridItem from "./GridItem";
import MovieButtons from "./MovieButtons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedItems = useSelector((store) => store.movies.selected);

  const selected = selectedItems.find((item) => item === movie.title);

  const handleAddFavourite = () => {
    dispatch(setFavMovie({ favourite: movie }));
    dispatch(updateMovie({ title: movie.title, selected: true }));
  };

  const handleDeleteFavourite = () => {
    dispatch(deleteFavMovie({ title: movie.title }));
    dispatch(updateMovie({ title: movie.title, selected: false }));
  };

  const handleOpen = () => {
    navigate(`/movies/${movie.title}`);
  };

  return (
    <Grid container item sx={{ height: "50px" }}>
      {Object.entries(movie).map(([key, value], i) => {
        const style = key === "title" ? { color: "blue" } : {};
        if (key === "selected") return null;
        return (
          <Grid item xs={2} key={i}>
            <GridItem sx={style}>{value}</GridItem>
          </Grid>
        );
      })}
      <MovieButtons
        selected={selected}
        handleAddFavourite={handleAddFavourite}
        handleDeleteFavourite={handleDeleteFavourite}
        handleOpen={handleOpen}
      />
    </Grid>
  );
};

export default Movie;
