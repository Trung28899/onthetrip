import { createSlice } from "@reduxjs/toolkit";

export interface LoadingReducer {
  loading_count: number;
}

const initialState: LoadingReducer = {
  loading_count: 0,
};

// If loading_count > 0, the spinner will keep spinning
// This helps manage loading in case there are multiple loading item at a time
// See how it works in this file: @/components/Spinner/Spinner.tsx
const loadingSlice = createSlice({
  name: "loading_count",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading_count += 1;
    },
    completeLoading: (state) => {
      state.loading_count -= 1;
    },
    resetLoading: (state) => {
      state.loading_count = 0;
    },
  },
});

const { actions, reducer } = loadingSlice;
export const { startLoading, completeLoading, resetLoading } = actions;
export default reducer;
