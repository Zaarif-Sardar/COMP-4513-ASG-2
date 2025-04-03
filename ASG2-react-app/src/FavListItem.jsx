import { useState, useEffect, useContext } from 'react'
import { Routes, Route} from 'react-router-dom'
import { FavouriteContext } from './App.jsx';

//import './App.css'



function FavListItem(props) 
{

    const {favourites, setFavourites} = useContext(FavouriteContext);

    const handleClick = (e) => {
        props.update(props.id);
    }

    return(
        <li className='py-4 px-4 border-2 border-solid hover:bg-stone-500' >
            {props.name}
            <button onClick={handleClick}>D</button>
        </li>

     
   
    )
}

export default FavListItem