import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'


//import './App.css'



function GenreListItem(props) 
{
    const handleClick = (e) => {
        props.update(props.id);
    }

    return(
        <li className='py-4 px-4 border-2 border-solid hover:bg-stone-500' onClick={handleClick}>{props.name}</li>
        
    )
}

export default GenreListItem