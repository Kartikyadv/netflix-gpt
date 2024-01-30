import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

export const useMovieTrailer = async ({id}) => {
  const trailerVideo = useSelector(store => store.movie.trailerVideo);
    const dispatch = useDispatch();
    
  useEffect(() => {
    if(!trailerVideo) getMoviesVideos();
  }, []);

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json?.results?.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))
  };
}