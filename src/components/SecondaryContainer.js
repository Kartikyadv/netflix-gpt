import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie)
  if(movies.nowPlayingMovies === null) return;
  return (
    <div className=' bg-black'>
      <div className='-mt-64 pl-12 relative z-10'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Block Buster"} movies={movies?.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer