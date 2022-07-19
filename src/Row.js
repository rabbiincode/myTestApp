import axios from 'axios';
import { useEffect, useState } from "react"
import SearchBox from './SearchBox';
import ThumbNail from './ThumbNail';

const Row = () => {

    const [search, setSearch] = useState('avengers')
    const [result, setResult] = useState([])

    const getData = async (search) => {
        const { data } = await
        axios.get(`https://www.omdbapi.com/?s=${search}&apikey=b38225d7`)

        if (data.Search) {
          setResult(data.Search)
      }
        }
        
      useEffect(() => {
        getData(search)
      }, [search])

     console.log(result);

  return (
    <div>
      <SearchBox setSearch={setSearch}  />
      <div className="h-40 px-4 space-y-0.5 md:space-y-2 md:px-14">
      
        <div className="group relative md:-ml-2 ">

          <h1 className='text-black font-bold pb-2'>{search}</h1>
          <div className="flex items-center space-x-0.5 overflow-x-scroll overflow-y-hidden scrollbar-hide md:space-x-2.5">
            {result.map((movie) => (
              <ThumbNail movie={movie} key={movie.imdbID}/>    
          ))}
        </div>

      </div>
      
    </div>
    </div>
  )
}

export default Row