import React from 'react'
import CarouselImg from './CarouselImg';
import MyImg from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/" className='flex items-center'> <img className='h-[70px] w-[250px] rounded rounded-3xl border-4 border-slate-500/50 saturate-50 shadow-lg shadow-slate-500' src={MyImg}  alt="" /> </Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">

      <input type="text" placeholder="Search" className="input input-bordered"/>
    
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://randomuser.me/api/portraits/men/3.jpg" />
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

<CarouselImg/>
    </div>
  )
}

export default Header