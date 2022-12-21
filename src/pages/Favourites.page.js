import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";

const Favourites = () => {
  const movies = useSelector((store) => store.movies.favouriteMovies);
  const headers =
    movies.length > 0
      ? Object.keys(movies[0]).map(
          (header) => header[0].toUpperCase() + header.slice(1)
        )
      : [];
  return (
    <>
      <Navbar />
      <Container
        sx={{ height: "80vh", paddingTop: "10rem", position: "relative" }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          Favourites
        </Typography>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "10%",
            right: 0,
          }}
        >
          <Link
            to={"/movies"}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Go Back
          </Link>
        </Button>
        {movies.length > 0 ? (
          <Grid container>
            <Grid container item sx={{ height: "50px" }}>
              {headers.map((header, i) => {
                if (header === "Selected") return null;
                return (
                  <Grid item xs={4} key={i}>
                    <GridItem sx={{ color: "black", fontWeight: 600 }}>
                      {header}
                    </GridItem>
                  </Grid>
                );
              })}
            </Grid>
            <Grid container item sx={{ height: "50px" }}>
              {movies.map((movie) => {
                return Object.entries(movie).map(([key, value], i) => {
                  if (key === "selected") return null;
                  return (
                    <Grid item xs={4} key={i}>
                      <GridItem sx={{ height: "50px" }}>{value}</GridItem>
                    </Grid>
                  );
                });
              })}
            </Grid>
          </Grid>
        ) : (
          <div style={{ textAlign: "center", color: "#1976d2" }}>EMPTY</div>
        )}
      </Container>
    </>
  );
};

export default Favourites;
