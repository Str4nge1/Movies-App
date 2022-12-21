import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/Home.page";
import MoviesPage from "./pages/Movies.page";
import MoviesDetailsPage from "./pages/Movies.details.page";
import SignUp from "./pages/SignUp.page";
import SignIn from "./pages/SignIn.page";
import ErrorPage from "./pages/Error.page";
import Favourites from "./pages/Favourites.page";
import Protected from "./components/Protected";
import { useSelector } from "react-redux";

const queryClient = new QueryClient();

function App() {
  const user = useSelector((store) => store.user);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Protected id={user.id}>
                <HomePage />
              </Protected>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/movies"
            element={
              <Protected id={user.id}>
                <MoviesPage />
              </Protected>
            }
          />
          <Route
            path="/movies/:title"
            element={
              <Protected id={user.id}>
                <MoviesDetailsPage />
              </Protected>
            }
          ></Route>
          <Route
            path="/favourites"
            element={
              <Protected id={user.id}>
                <Favourites></Favourites>
              </Protected>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
