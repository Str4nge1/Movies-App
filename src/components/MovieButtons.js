import React from "react";
import Grid from "@mui/material/Grid";
import GridItem from "./GridItem";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import LaunchIcon from "@mui/icons-material/Launch";

const MovieButtons = ({
  handleOpen,
  handleAddFavourite,
  handleDeleteFavourite,
  selected,
}) => {
  return (
    <>
      <Grid item xs={1}>
        <GridItem>
          <Button variant="text" onClick={handleOpen}>
            <LaunchIcon></LaunchIcon>
          </Button>
        </GridItem>
      </Grid>
      <Grid item xs={2}>
        <GridItem>
          <Button sx={{ color: "black" }} onClick={handleAddFavourite}>
            {selected ? (
              <FavoriteOutlinedIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </Button>
        </GridItem>
      </Grid>
      <Grid item xs={3}>
        <GridItem>
          <Button
            variant="outlined"
            color="error"
            onClick={handleDeleteFavourite}
            disabled={!selected}
          >
            Remove
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default MovieButtons;
