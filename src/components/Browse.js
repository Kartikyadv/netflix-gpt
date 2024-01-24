import React from "react";
import Header from "./Header";
import useGetMovies from "../hooks/useGetMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useGetMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
