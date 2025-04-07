import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import GalleryListItem from './GalleryComponents/GalleryListItem.jsx'

//import './App.css'



function PaintingsOptions(props) 
{

    const handleClick = (e) => 
        {
            props.update(e.target.value);

        }

    return(
        <div className=' col-span-2 m-5'>
            <div className=" flex justify-around  content-center   ">
           <button type='button' onClick={handleClick} value="title" className='py-2 px-8 rounded-lg focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid '>Title</button>
           <button type='button' onClick={handleClick} value="artist" className='  py-2 px-8 rounded-lg focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid '>Artist Name </button>
           <button type='button' onClick={handleClick} value="year" className='  py-2 px-8 rounded-lg focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid '>Year</button>

           </div>
        </div>
       
    )
}

export default PaintingsOptions