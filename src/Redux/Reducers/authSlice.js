import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [
    { username: "oui", password: "123" }
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});





export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
