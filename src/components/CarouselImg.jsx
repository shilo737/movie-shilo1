import {  Carousel } from "flowbite-react";
import React from "react";


const CarouselImg = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100">
  <div className="flex-1 text-5xl font-extrabold ">
    <a className="btn btn-ghost normal-case text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Movie Express</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
      
      <div className="h-[500px] ">
        <Carousel slideInterval={3000}>
          <img className="h-[560px] xl:w-[1900px]  w-[800px] md:w-[1500px]"
            src="https://www.thebusinessdesk.com/_files/images/jan_23/Bank-of-Dave.jpg"
            alt="..."
          />
          <img className="h-[500px] xl:w-[1900px]  w-[800px] md:w-[1500px]"
            src="https://wallpaperaccess.com/full/2116417.jpg"
            alt="..."
          />
          <img className="h-[600px] xl:w-[1900px]  w-[800px] md:w-[1500px]"
            src="https://q7h8x4g8.stackpathcdn.com/wp-content/uploads/2016/01/KA_03_Hobbs_Shaw-1024x576.jpg"
            alt="..."
          />
        </Carousel>
      </div>
      </div>
  );
};

export default CarouselImg;
