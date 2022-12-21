import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload: { username, email, id, token } }) => {
      state.username = username;
      state.email = email;
      state.id = id;

      localStorage.setItem("access-token", token);
    },

    logout: (state) => {
      state.username = "";
      state.email = "";
      state.id = null;

      localStorage.removeItem("access-token");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
