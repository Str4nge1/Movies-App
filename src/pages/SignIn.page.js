import React from "react";
import { useQuery } from "react-query";
import { useFormik } from "formik";
import { request } from "../http/axios";
import { signupValidationSchema } from "../validations/signinValidation";
import { Container, Typography } from "@mui/material";
import Formik from "../components/Formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((store) => store.user.id);

  const onSuccess = ({ data: { accessToken: token, user } }) => {
    dispatch(
      login({
        username: user.username,
        email: user.email,
        id: user.id,
        token,
      })
    );

    navigate("/movies");
  };

  const onError = (error) => {
    console.error(error);
    return <div>Error</div>;
  };

  useEffect(() => {
    if (id) navigate("/movies");
  }, [id, navigate]);

  const query = useQuery(
    "signin-page",
    async () => {
      return await request.post("/login", {
        email: formik.values.email,
        password: formik.values.password,
      });
    },
    { enabled: false, onSuccess, onError, retry: false }
  );

  const formik = useFormik({
    initialValues: {
      email: "",
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
      <Formik page="sign in" inputs={inputs} formik={formik}></Formik>
      <Typography sx={{ marginTop: "0.5rem" }}>
        Don't have account yet?{" "}
        <Link
          to={"/signup"}
          style={{
            textDecoration: "none",
            color: "#1976d2",
          }}
        >
          register now
        </Link>
      </Typography>
    </Container>
  );
};

export default SignIn;
