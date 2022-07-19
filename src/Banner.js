import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Banner = () => {
    const [movie, setMovie] = useState('')

  const getData = async () => {
    const { data } = await
    axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=b38225d7')
    setMovie(data)
  }
 useEffect(() => {
   getData()
 }, [])
 console.log(movie);

  return (
    <div className="flex flex-col space-y-2">
    <div className="relative -z-10 w-screen">
      <img 
        src={movie.Poster} 
        alt='img'
        className='w-screen h-[50vh] object-cover -z-10'
      />
    </div>

    <div className="absolute text-3xl space-y-2 font-semibold text-white top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-24">
      <p>Watch</p>
      <p>something</p>
      <p>incredible.</p>
    </div>

  </div>
  )
}

export default Banner