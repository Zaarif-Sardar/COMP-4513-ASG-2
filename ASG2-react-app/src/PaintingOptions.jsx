import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import GalleryListItem from './GalleryListItem.jsx'

//import './App.css'



function PaintingsOptions(props) 
{

    const handleClick = (e) => 
        {
            props.update(e.target.value);
            console.log(e.target.value);

        }

    return(
        <div className='border-4 border-solid col-span-2'>
            <div className=" flex justify-around  content-center  border-2 border-solid py-2 ">
           <button type='button' onClick={handleClick} value="title" className='bg-gray-800  py-2 px-8 rounded-lg focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid '>Title</button>
           <button type='button' onClick={handleClick} value="artist" className='bg-gray-800  py-2 px-8 rounded-lg focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid '>Artist Name </button>
           <button type='button' onClick={handleClick} value="thumbnail" className='bg-gray-800  py-2 px-8 rounded-lg focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid '>Thumbnail</button>
           <button type='button' onClick={handleClick} value="year" className='bg-gray-800  py-2 px-8 rounded-lg focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid '>Year</button>

           </div>
        </div>
       
    )
}

export default PaintingsOptions