import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useGetMovies = () => {
    
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1'",
        API_OPTIONS
        );
        
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
    getNowPlayingMovies();
  },[dispatch]);
  
};

export default useGetMovies;