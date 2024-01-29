import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  if(poster_path === null) return null;
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_CDN_URL + poster_path} alt='poster'/>
    </div>
  )
}

export default MovieCard