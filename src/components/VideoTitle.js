import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video bg-gradient-to-r from-black absolute text-white pt-[20%] px-6 md:px-24'>
    <h1 className='mt-12 md:m-0 text-2xl md:text-6xl font-bold' >{title}</h1>
    <p className='md:m-0 hidden md:inline-block py-6 text-lg w-1/4' >{overview.slice(0,200)}...</p>
    <div className='my-4 md:m-0'>
        <button className='bg-white text-black p-2 px-6 md:py-4 md:px-12 md:text-xl hover:bg-opacity-50 rounded-lg'>🔺 Play</button>
        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>❕ More info</button>
    </div>
    </div>
  )
}

export default VideoTitle