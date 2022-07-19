
const ThumbNail = ({movie: {Poster, Title}}) => {
    return (
      <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        <img
          src={Poster}
          alt='img'
          className="relative rounded-sm object-cover md:rounded"
          />      

          <h1 className='absolute top-10 left-6 font-bold text-[#fff] lg:top-20 lg:left-15'>{Title}</h1>
      </div>
    )
  }
  
  export default ThumbNail