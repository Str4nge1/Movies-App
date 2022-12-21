import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";
import { clearSore } from "../features/movies/moviesSlice";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector((store) => store.user);
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "15vh",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>

          <Button
            variant="text"
            onClick={() => navigate("/movies")}
            sx={{ color: "#fff" }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginRight: "2rem",
                fontSize: {
                  xs: "0.9rem",
                  md: "1.8rem",
                },
              }}
            >
              Movies
            </Typography>
          </Button>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: {
                xs: "0.8rem",
                md: "1.8rem",
              },
            }}
          >
            <NavLink
              to={"/favourites"}
              style={{
                listStyleType: "none",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Favourites
            </NavLink>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginRight: "2rem",
              fontSize: {
                xs: "0.9rem",
                md: "1.8rem",
              },
            }}
          >
            {username}
          </Typography>
          <Button
            sx={{
              fontSize: {
                xs: "0.8rem",
                md: "1.8rem",
              },
            }}
            color="inherit"
            onClick={() => {
              dispatch(logout());
              dispatch(clearSore());
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
