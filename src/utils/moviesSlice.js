import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeMovies: (state, action) => {
      state.nowPlayingMovies = null;
      state.trailerVideo = null;
      state.popularMovies = null;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  removeMovies,
  addTrailerVideo,
  addPopularMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
