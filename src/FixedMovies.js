import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ThumbNail from './ThumbNail'

const FixedMovies = () => {
    const [thumb, setThumb] = useState([])

    const getData = async () => {
      const { data } = await
        axios.get('https://www.omdbapi.com/?s=merlin&apikey=b38225d7')
        setThumb(data.Search)
      }

      useEffect(() => {
        getData()
      })

  return (
    <div className='h-40 px-4 space-y-0.5 md:space-y-2 md:px-14'>
      <div className="group relative md:-ml-2 ">

        <h1 className='text-black font-bold pb-2'>merlin</h1>
        <div className="flex items-center space-x-0.5 overflow-x-scroll overflow-y-hidden scrollbar-hide md:space-x-2.5">
          {thumb.map((movie) => (
            <ThumbNail movie={movie} key={movie.imdbID}/>    
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default FixedMovies