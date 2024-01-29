import React, { useRef } from 'react';
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GPTSearchBar = () => {
  const selectedLanguage = useSelector(store => store.config.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`;

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addGptMovieResult({movieName: searchText?.current?.value ,movieResult: json?.results}));
  }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form onSubmit={e=>{e.preventDefault()}} className='w-1/2 bg-black grid grid-cols-12'>
            <input ref={searchText} type='text' placeholder={lang[selectedLanguage].getSearchPlaceHolder} className='p-4 m-4 col-span-9'/>
            <button onClick={handleGptSearchClick} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' >{lang[selectedLanguage].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar


    // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: " + searchText.current.value + "only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: movie1, movie2,...";
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(chatCompletion.choices);