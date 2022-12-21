import React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../features/movies/moviesSlice";

const ColorButton = styled(Button)(() => ({
  color: "black",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: blue[300],
    color: "#fff",
  },
  width: "100%",
  minHeight: "50px",
}));

const Genres = ({ genreChange, values }) => {
  const dispatch = useDispatch();
  const [selectedGenreIndex, setSelectedGenreIndex] = useState(0);

  return (
    <Grid container>
      {values.map((genre, index) => {
        const style =
          selectedGenreIndex === index
            ? {
                backgroundColor: blue[700],
                color: "#fff",
                "&:hover": {
                  backgroundColor: blue[700],
                  color: "#fff",
                },
              }
            : {};
        return (
          <Grid item xs={12} key={index}>
            <ColorButton
              sx={style}
              variant="contained"
              onClick={(e) => {
                dispatch(setCurrentPage({ page: 1 }));
                genreChange(e.target.textContent);
                setSelectedGenreIndex(index);
              }}
            >
              {genre}
            </ColorButton>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Genres;
