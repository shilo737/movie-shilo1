import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const SearchMovie = () => {

const[messages, setMessage]=useState("")
const searchVal = useRef();
const {searchQ} = useParams()
const navigate = useNavigate()

  return (
    <div className='grid grid-cols-5'>
<form>   
    <div className="relative">
        <input ref={searchVal} onChange={(e)=>setMessage(e.target.value)} type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Search  movie'/>
       
        <button onClick={()=> searchVal.current.value ? navigate(`/Search/${searchVal.current.value}`):navigate('/')}  type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

    </div>
  )
}

export default SearchMovie