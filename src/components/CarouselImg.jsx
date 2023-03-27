import { Badge, Carousel } from 'flowbite-react';
import React from 'react'

const CarouselImg = () => {
  return (       
<div>
<div className="h-72 sm:h-64 xl:h-80 2xl:h-96">
  {/* <Carousel>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src="https://cdn.moviefone.com/image-assets/23168/3NIzyXkfylsjflRKSz8Fts3lXzm.jpg?d=360x540&q=60" alt="" />
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src="https://i.ytimg.com/vi/zhbWBx6ryMI/hqdefault.jpg" alt="" />
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src="" alt="" />
    </div>
  </Carousel> */}
  
</div>
<div className="h{'200px'} sm:h-64 xl:h-80 2xl:h-96">
  <Carousel
    leftControl="left"
    rightControl="right"
  >
    <img
      src="https://pbs.twimg.com/media/FoxkJMDXwAUFuMt.jpg:large"
      alt="..."
    />
    <img
      src="https://i.ytimg.com/vi/zhbWBx6ryMI/hqdefault.jpg"
      alt="..."
    />
    <img
      src="https://cdn.moviefone.com/image-assets/23168/3NIzyXkfylsjflRKSz8Fts3lXzm.jpg?d=360x540&q=60"
      alt="..."
    />
    <img
      src="https://cdn.moviefone.com/admin-uploads/posters/bdonline1sht01-poster_1495561897.jpg?d=360x540&q=60"
      alt="..."
    />
    <img
      src="https://bestsimilar.com/img/movie/thumb/c9/67920.jpg"
      alt="..."
    />
  </Carousel>
</div>
      
    </div>
  )
}

export default CarouselImg