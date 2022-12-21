import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { setCurrentPage } from "../features/movies/moviesSlice";
import { useDispatch } from "react-redux";

const Paggination = ({ count = 1, sx }) => {
  const dispatch = useDispatch();
  if (count === 1) {
    return <></>;
  }
  return (
    <Stack spacing={2} sx={sx}>
      <Pagination
        count={count}
        variant="outlined"
        hideNextButton
        hidePrevButton
        shape="rounded"
        onChange={(e, page) => dispatch(setCurrentPage({ page }))}
      />
    </Stack>
  );
};

export default Paggination;
