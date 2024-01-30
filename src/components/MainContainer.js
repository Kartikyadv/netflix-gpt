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
    <div className='pt-[30%] bg-black md:p-0'>
    <VideoTitle title={title} overview={overview}/>
    <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer