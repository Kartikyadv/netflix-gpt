import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BACKGROUND_IMG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <img className="absolute -z-10 h-screen object-cover md:h-auto" src={BACKGROUND_IMG_URL} alt="Logo" />
      <div className="md:p-0">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
