import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = null;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    removeTrailerVideo: (state, action) => {
      state.trailerVideo = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  removeNowPlayingMovies,
  addTrailerVideo,
  removeTrailerVideo,
} = movieSlice.actions;
export default movieSlice.reducer;
