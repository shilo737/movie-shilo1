import { Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import MovieInput from "./MovieInput";
import myLogo from '../assets/logo.png'

const CarouselImg = () => {
  return (
    <div className="">
      <div className="absolute z-10 bg-transparent navbar">
        <div className="flex-1 text-5xl font-extrabold ">
          <Link to="/"><img className=" rounded rounded-3xl md:h-[70px] md:w-[260px] w-[150px] h-[70px]" src={myLogo} alt=""/></Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
          <MovieInput/>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://randomuser.me/api/portraits/men/62.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[550px] ">
        <Carousel slideInterval={3000}>
          <img
            className="h-[630px] xl:w-[1900px]  w-[800px] md:w-[1500px] "
            src="https://cdn.mos.cms.futurecdn.net/HexHbb8H3c2A9WpLBdtLHV.jpg"
            alt="..."
          />
          <img
            className="h-[580px] xl:w-[1900px]  w-[800px] md:w-[1500px]"
            src="https://wallpaperaccess.com/full/2116417.jpg"
            alt="..."
          />
          <img
            className="h-[600px] xl:w-[1900px]  w-[800px] md:w-[1500px]"
            src="https://q7h8x4g8.stackpathcdn.com/wp-content/uploads/2016/01/KA_03_Hobbs_Shaw-1024x576.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselImg;
