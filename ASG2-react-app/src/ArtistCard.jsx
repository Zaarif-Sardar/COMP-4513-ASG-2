import { useState, useEffect, useContext } from 'react'
import { Routes, Route} from 'react-router-dom'
import { FavouriteAContext } from './App.jsx'


//import './App.css'



function ArtistCard(props) 
{
    const {favouritesA,setFavouritesA} = useContext(FavouriteAContext);

    const addToFave = () => 
        {
            let f = favouritesA.find(f => f.artistId === props.artist.artistId);
            if(!f)
            {
                const newFav = [...favouritesA]
                newFav.push({id:props.artist.artistId, fName:props.fName, lName:props.lName, artistObject:props.artist});
                setFavouritesA(newFav);
                console.log(newFav);
                alert('Added to favorites!');
            }
        }

    return(
        <div>
            <div className=''>
                <p className='text-7xl border-solid py-2 px-2'>{props.fName} {props.lName}</p>
                <p className='text-3xl py-1 px-2'>{props.gender}, born in {props.nationality}</p>
                <p className='text-2xl py-1 px-2'>Born in the year of {props.birthDate}</p>
                <p className='text-2xl py-1 px-2'>Passed away in the year of {props.deathDate}</p>
                <a className='text-2xl py-1 px-2' href={props.artistLink} >Visit their Site </a>
            </div> 
            <div>
                <button onClick={addToFave}>Add to Favourite</button>
            </div>   

        </div>
   
       
            


    )
}

export default ArtistCard