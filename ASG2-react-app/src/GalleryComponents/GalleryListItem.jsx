import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'


//import './App.css'



function GalleryListItem(props) 
{
    const handleClick = (e) => {
        props.update(props.id);
    }

    return(
        <li className='py-4 px-4 border-2 border-solid hover:bg-stone-500 rounded-md my-5 font-sans text-lg' onClick={handleClick}>
            {props.name}
        </li>
            

    )
}

export default GalleryListItem