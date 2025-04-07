import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'


//import './App.css'



function ArtistsListItem(props) 
{
    const handleClick = (e) => {
        props.update(props.id);
    }

    return(
        <li className=' leftLI py-4 px-4 border-2 border-solid hover:bg-stone-500 font-sans text-lg text-white' onClick={handleClick}>{props.fName} {props.lName}</li>
        
    )
}

export default ArtistsListItem