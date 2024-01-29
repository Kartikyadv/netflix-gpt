import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        gptSearchMovies: null,
        gptSearchName: null,
    },
    reducers: {
        toggleGPTSearchView: (state,action) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptMovieResult: (state,action) => {
            const {movieName,movieResult} = action.payload;
            state.gptSearchMovies = movieResult;
            state.gptSearchName = movieName;
        },
    },
});

export const {toggleGPTSearchView,addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;