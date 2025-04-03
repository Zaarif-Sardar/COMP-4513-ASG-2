import { useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import { FavouriteAContext } from './App';


//import './App.css'



function Favourites(props) 
{
    const {favouritesA, setFavouritesA} = useContext(FavouriteAContext);

    console.log(favouritesA);

    return(
        <div className=' flex min-h-screen justify-center items-center '>

        hello
        </div>


    )
}

export default Favourites