import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import {BACKGROUND_IMG_URL} from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
      
      <img
        className="absolute -z-10"
        src={BACKGROUND_IMG_URL}
        alt="Logo"
      />
      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
  )
}

export default GptSearch