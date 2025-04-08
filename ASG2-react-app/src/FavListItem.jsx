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
        <li className='py-4 px-4 border-2 border-solid border-cOrange flex justify-around text-xl items-center rounded-md' >
            {props.name}
            <button  className ='text-white text-lg  hover:bg-jYellow rounded-md p-5 ' onClick={handleClick}>Delete</button>
        </li>

     
   
    )
}

export default FavListItem