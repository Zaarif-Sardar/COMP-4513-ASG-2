import { useState, useEffect,useContext } from 'react'
import { Routes, Route} from 'react-router-dom'
import { FavouriteContext } from '../App.jsx'


//import './App.css'



function GalleryCard(props) 
{
    const {favourites,setFavourites} = useContext(FavouriteContext);

    const addToFave = () => 
        {
            let f = favourites.find(f => f.id === props.gallery.galleryId);
            if(!f)
            {
                const newFav = [...favourites]
                newFav.push({id:props.gallery.galleryId, name:props.galleryName, Object:props.gallery, favType:"G"});
                setFavourites(newFav);
                console.log(newFav);
                alert('Added to favorites!');
            }
        }
    return(
        
            <div className=''>
                <p className='text-7xl border-solid py-2 px-2'>{props.galleryName}</p>
                <p className='text-3xl py-1 px-2'>{props.galleryNativeName}</p>
                <p className='text-2xl py-1 px-2'>{props.galleryCity},{props.galleryCountry}</p>
                <a className='text-2xl py-1 px-2' href={props.galleryWebSite} >Visit their Site </a>
                <button onClick={addToFave}>Add to Favourites</button>
            </div>    
   
       
            


    )
}

export default GalleryCard