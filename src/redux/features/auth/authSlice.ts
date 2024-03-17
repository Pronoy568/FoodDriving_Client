import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  name: null | string;
  email: null | string;
  password: null | string;
};

const initialState: TUser = {
  name: null,
  email: null,
  password: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
    },
    setRegister: (state, action) => {
      const { name, email, password } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
    },
  },
});

export const { setUser, logout, setRegister } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.email;
