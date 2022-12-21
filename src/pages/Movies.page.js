import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { request } from "../http/axios";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movies/moviesSlice";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import Genres from "../components/Genres";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paggination from "../components/Paggination";

const Movies = ({ username }) => {
  const dispatch = useDispatch();
  const { movies, maxPages } = useSelector((store) => store.movies);
  const [genre, setGenre] = useState("All Genres");

  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  const handleGenreChange = (genre) => {
    if (genre === "All Genres") {
      setGenre("All Genres");
    } else {
      setGenre(genre);
    }
  };

  const onSuccess = ({ data }) => {
    const maxPages = Math.ceil(data.length / 4);
    dispatch(setMovies({ movies: data, maxPages }));
  };

  const onError = (error) => {
    console.error(error.message);

    return <div>Error</div>;
  };

  useQuery(
    "movies-page",
    async () => {
      return await request.get("/movies");
    },
    { onSuccess, onError, retry: false, refetchOnWindowFocus: false }
  );

  return (
    <>
      <Navbar username={username} />
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          paddingTop: "5rem",
        }}
      >
        <Box
          sx={{
            height: { xs: "auto", md: "70vh" },
            width: { md: "25%", xs: "50%" },
            marginBottom: { xs: "5rem" },
          }}
        >
          <Genres genreChange={handleGenreChange} values={genres} />
        </Box>
        <Box
          sx={{
            height: "70vh",
            width: { xs: "100%", md: "73%" },
          }}
        >
          <MovieList movies={movies} genre={genre} />
          <Paggination count={maxPages} sx={{ marginTop: "20px" }} />
        </Box>
      </Container>
    </>
  );
};

export default Movies;
