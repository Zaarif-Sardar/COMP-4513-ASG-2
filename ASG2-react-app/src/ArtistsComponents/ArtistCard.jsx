import { useState, useEffect, useContext } from 'react'
import { Routes, Route} from 'react-router-dom'
import { FavouriteContext } from '../App.jsx'


//import './App.css'



function ArtistCard(props) 
{
    const {favourites,setFavourites} = useContext(FavouriteContext);

    const addToFave = () => 
        {
            let f = favourites.find(f => f.id === props.artist.artistId);
            if(!f)
            {
                const newFav = [...favourites]
                newFav.push({id:props.artist.artistId, name:(props.fName + ' ' + props.lName), Object:props.artist, favType:"A"});
                setFavourites(newFav);
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