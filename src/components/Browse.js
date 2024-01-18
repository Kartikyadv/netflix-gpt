import React from 'react'
import Header from './Header';
import useGetMovies from '../hooks/useGetMovie';

const Browse = () => {

  useGetMovies();

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse