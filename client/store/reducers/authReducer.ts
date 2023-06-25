import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";

interface AuthInterface {
  authenticated: boolean;
}

const initialState: AuthInterface = {
  authenticated: false,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    authenticate: (state) => {
      state.authenticated = true;
    },
    logout: (state) => {
      state.authenticated = false;
    },
  },
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
export type { AuthInterface };
