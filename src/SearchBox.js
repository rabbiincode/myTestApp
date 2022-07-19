
import React from 'react'

const SearchBox = ({setSearch}) => {

  return (
    <div>
      <form
        className='relative bg-[#fff] py-7 px-4 md:mt-0 md:max-w-md md:px-14 min-w-full' 
      >
        <label className='inline-block min-w-full'>
        <h3>search</h3>
          <input
            className='outline-none bg-[#fff] focus:bg-[#fff] min-w-full rounded px-5 py-2
                       border border-gray-500 border-solid border-inherit'
            onChange={ (e) => {setSearch(e.target.value)}}
          />
        </label>
      </form>
        
    </div>
  )
}

export default SearchBox