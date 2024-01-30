import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

export const usePopularMovies = async () => {
  const popularMovies = useSelector(store => store.movie.popularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!popularMovies) getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};
