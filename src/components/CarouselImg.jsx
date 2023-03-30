import {  Carousel } from "flowbite-react";
import React from "react";
import Header from "./Header";

const CarouselImg = () => {
  return (
      <div className="h-[500px] ">
       
        <Carousel slideInterval={3000}>
          <img className="h-[600px] xl:w-[1900px]  w-[800px] md:w-[1500px]"
            src="https://img1.hulu.com/user/v3/artwork/adab412f-cee5-4b48-880f-c832da1a0420?base_image_bucket_name=image_manager&base_image=71dc5f6e-b892-4b77-b81e-7410e333ff7f&region=US&format=jpeg&size=952x536"
            alt="..."
          />
          <img className="h-[600px] xl:w-[1900px]  w-[800px] md:w-[1500px]"
            src="https://tvshowpilot.com/wp-content/uploads/2021/03/best-heist-tv-shows-list.jpg"
            alt="..."
          />
          <img className="h-[600px] xl:w-[1900px]  w-[800px] md:w-[1500px]"
            src="https://assets.reedpopcdn.com/-1618408528198.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/-1618408528198.jpg"
            alt="..."
          />
        </Carousel>
      </div>
  );
};

export default CarouselImg;
