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
        
            <div className=' grid grid-cols-3 bg-cBlue  my-5 mx-2 rounded-md py-5 px-5 gap-10 h-min '>
                <div className='col-start-1 col-end-4 text-white bg-cOrange rounded-md border-2 border-hBlue'>
                    <p className='text-7xl border-solid py-2 px-2  '>{props.galleryName}</p>
                    <p className='text-3xl py-1 px-2'>Originally known as  <span className='font-bold'>{props.galleryNativeName}</span></p>
                </div>
                <div className=' p-40 text-white bg-cOrange rounded-md col-start-1 col-end-3 border-2 border-hBlue ' >MAP BOX</div>
                <div className=' text-white bg-cOrange rounded-md place-self-center col-start-3 col-end-4 border-2 border-hBlue'> 
                    <p className='text-2xl py-1 px-2'> Located in {props.galleryCity}, {props.galleryCountry}</p>
                    <a className='text-2xl py-1 px-2 hover:text-stone-900 text-rBlack font-bold' href={props.galleryWebSite} > Visit their Site </a>
                </div>
               
                
                <button className='bg-jYellow rounded-md text-white text-lg font-bold col-start-2 py-5 border-2 border-hBlue' onClick={addToFave}>Add to Favourites</button>
            </div>    
   
       
            


    )
}

export default GalleryCard