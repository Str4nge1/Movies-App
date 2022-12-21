import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Formik = ({ page, inputs, formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      {inputs.map(({ value, type, styles }, index) => {
        return (
          <TextField
            key={index}
            fullWidth
            id={value}
            name={value}
            style={styles}
            label={value[0].toUpperCase() + value.slice(1)}
            type={type}
            value={formik.values[value]}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched[value] && Boolean(formik.errors[value])}
            helperText={formik.touched[value] && formik.errors[value]}
          ></TextField>
        );
      })}
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{
          marginTop: "1rem",
        }}
      >
        {page}
      </Button>
    </form>
  );
};

export default Formik;
