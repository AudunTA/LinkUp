import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addToFeed(state, action) {
      state.posts = action.payload;
    },
  },
});

export const { addToFeed } = feedSlice.actions;
export const feedReducer = feedSlice.reducer;
