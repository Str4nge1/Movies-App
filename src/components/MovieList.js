import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Movie from "./Movie";
import { useSelector } from "react-redux";
import GridItem from "./GridItem";
import { updateMaxPageCount } from "../features/movies/moviesSlice";
import { useDispatch } from "react-redux";
import { Container } from "@mui/system";

const MovieList = ({ movies, genre }) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((store) => store.movies);
  const [moviesByGenre, setMoviesByGenre] = useState(movies);

  const headers =
    movies.length > 0
      ? Object.keys(movies[0]).map(
          (header) => header[0].toUpperCase() + header.slice(1)
        )
      : [];

  useEffect(() => {
    if (genre === "All Genres") {
      setMoviesByGenre(movies);
      dispatch(updateMaxPageCount({ maxPages: Math.ceil(movies.length / 4) }));
    } else {
      const filteredMovies = movies.filter((movie) => movie.genre === genre);
      setMoviesByGenre(filteredMovies);
      dispatch(
        updateMaxPageCount({ maxPages: Math.ceil(filteredMovies.length / 4) })
      );
    }
  }, [dispatch, genre, movies]);

  const start = (currentPage - 1) * 4;
  const end = currentPage * 4 - 1;
  const moviesThisPage = moviesByGenre.slice(start, end + 1);

  return (
    <Container sx={{ height: "250px" }}>
      <Grid container sx={{ width: { xs: "100%" } }}>
        <Grid container item sx={{ height: "50px" }}>
          {headers.map((header, i) => {
            if (header === "Selected") return null;
            return (
              <Grid item xs={2} key={i}>
                <GridItem sx={{ color: "black", fontWeight: 600 }}>
                  {header}
                </GridItem>
              </Grid>
            );
          })}
        </Grid>
        {moviesThisPage.map((movie, i) => (
          <Movie key={i} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
