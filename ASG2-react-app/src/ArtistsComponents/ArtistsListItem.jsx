import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'


//import './App.css'



function ArtistsListItem(props) 
{
    const handleClick = (e) => {
        props.update(props.id);
    }

    return(
        <li className=' leftLI rounded-md my-4 font-sans text-lg text-white bg-cOrange   hover:bg-gray-100 hover:text-stone-900' onClick={handleClick}>{props.fName} {props.lName}</li>
        
    )
}

export default ArtistsListItem