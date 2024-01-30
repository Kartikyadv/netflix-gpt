import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useGetMovies = () => {
  const nowPlayingMovies = useSelector(store => store.movie.nowPlayingMovies);
    
  const dispatch = useDispatch();
  
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1'",
      API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(()=>{
    if(!nowPlayingMovies) getNowPlayingMovies();
  },[dispatch]);
  
};

export default useGetMovies;