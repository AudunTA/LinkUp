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
    logStore(state, action) {
      console.log("LOL");
      console.log(state.feed);
    },
  },
});

export const { addToFeed, logStore } = feedSlice.actions;
export const feedReducer = feedSlice.reducer;
