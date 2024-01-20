import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector(store => store.movie?.nowPlayingMovies);
  if(!movies) return;
  const mainMovie = movies[0];
  const {title, overview, id} = mainMovie;
  return (
    <>
    <VideoTitle title={title} overview={overview}/>
    <VideoBackground id={id}/>
    </>
  )
}

export default MainContainer