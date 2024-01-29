import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const movies = useSelector(store => store?.gpt);
  if(movies?.gptSearchMovies === null) return;
  return (
    <div className=''>
      <div className='pl-12 relative z-10'>
      <MovieList title={movies?.gptSearchName} movies={movies?.gptSearchMovies}/>
      </div>
    </div>
  )
}

export default GPTMovieSuggestions