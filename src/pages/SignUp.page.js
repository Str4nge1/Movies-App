import React from "react";
import { useQuery } from "react-query";
import { signupValidationSchema } from "../validations/signupValidation";
import { useFormik } from "formik";
import { request } from "../http/axios";
import { Container, Typography } from "@mui/material";
import Formik from "../components/Formik";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/signin");
  };

  const onError = (error) => {
    console.error(error.message);
    return <div>Error</div>;
  };

  const query = useQuery(
    "signup-page",
    async () => {
      return await request.post("/register", {
        email: formik.values.email,
        username: formik.values.username,
        password: formik.values.password,
      });
    },
    { enabled: false, onSuccess, onError }
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: signupValidationSchema,

    onSubmit: () => {
      query.refetch();
    },
  });

  const inputs = [
    { value: "email", type: "email", styles: {} },
    {
      value: "username",
      type: "",
      styles: {
        marginTop: "1rem",
      },
    },
    {
      value: "password",
      type: "password",
      styles: {
        marginTop: "1rem",
      },
    },
  ];

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Formik page="sign up" inputs={inputs} formik={formik}></Formik>
      <Typography sx={{ marginTop: "0.5rem" }}>
        Already registered?{" "}
        <Link
          to={"/signin"}
          style={{
            textDecoration: "none",
            color: "#1976d2",
          }}
        >
          login now
        </Link>
      </Typography>
    </Container>
  );
};

export default SignUp;
