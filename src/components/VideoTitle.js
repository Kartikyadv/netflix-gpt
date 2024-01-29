import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video bg-gradient-to-r from-black absolute text-white pt-[20%] px-24'>
    <h1 className='text-6xl font-bold' >{title}</h1>
    <p className='py-6 text-lg w-1/4' >{overview.slice(0,200)}...</p>
    <div>
        <button className='bg-white text-black p-4 px-12 text-xl hover:bg-opacity-50 rounded-lg'>🔺 Play</button>
        <button className=' mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>❕ More info</button>
    </div>
    </div>
  )
}

export default VideoTitle