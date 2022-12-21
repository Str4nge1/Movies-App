import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MoviesDetails = () => {
  const { title } = useParams();
  const { movies } = useSelector((store) => store.movies);

  const movie = movies.find((movie) => movie.title === title);
  console.log(movie);
  return (
    <>
      <Navbar />
      <Container sx={{ paddingTop: "2rem" }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          {movie.title}
        </Typography>
        <Stack spacing={2} sx={{ paddingTop: "2rem" }}>
          {Object.entries(movie).map(([key, value], i) => {
            if (key === "title" || key === "selected") return null;
            return (
              <Item key={i}>
                {key} - {value}
              </Item>
            );
          })}
        </Stack>
      </Container>
    </>
  );
};

export default MoviesDetails;
