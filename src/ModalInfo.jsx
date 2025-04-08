import { useState, useEffect, useContext } from 'react'
import { Routes, Route} from 'react-router-dom'
import { FavouriteContext } from './App.jsx'


//import './App.css'



function ModalInfo(props) 
{
    const {favourites,setFavourites} = useContext(FavouriteContext);

    const addToFave = () => 
        {
            let f = favourites.find(f => f.id === props.clickedPainting.id);
            if(!f)
            {
                const newFav = [...favourites]
                newFav.push({id:props.clickedPainting.id, name:props.clickedPainting.title, Object:props.clickedPainting.painting, favType:"P"});
                console.log(props.clickedPainting.title)
                setFavourites(newFav);
                console.log(newFav);
                alert('Added to favorites!');
            }
        }
    
    return(
        <div className='grid grid-cols-5 gap-4'>
            <div className='col-start-1 col-end-3 rounded-md text-white text-2xl font-bold bg-cOrange py-5 px-2 border-4 border-hBlue'>
                <p>{props.clickedPainting.title}</p>
            </div>

            <div className='col-start-3 col-end-6 rounded-md text-white text-lg bg-cOrange  py-5  px-2 border-4 border-hBlue'>
                <p> Made in {props.clickedPainting.yearOfWork}</p>
            </div>

            <div className='col-start-1 col-end-2 rounded-md text-white text-lg font-bold bg-cOrange py-5  px-2 border-4 border-hBlue'>
                <p>{props.clickedPainting.artists.firstName} {props.clickedPainting.artists.lastName}</p>
                <a  className='text-rBlack'href={props.clickedPainting.artists.artistLink}>Learn more about the Artist here</a>
            </div>

            <div className='col-start-3 col-end-6 rounded-md text-white text-lg  bg-cOrange py-5  px-2 border-4 border-hBlue'>
                <p>Located in {props.clickedPainting.galleries.galleryName} in the city of {props.clickedPainting.galleries.galleryCity}</p>
                <a className='text-rBlack' href={props.clickedPainting.galleries.galleryWebsite}>Check out the Gallery Site</a>
            </div> 

            <div className='col-start-1 col-end-3 rounded-md text-white text-lg bg-cOrange py-5  px-2 border-4 border-hBlue'>
                <img  className='size-48' src={`/paintings/square/${props.clickedPainting.imageFileName}.jpg`} ></img>
                <p>Width: {props.clickedPainting.width}, Height: {props.clickedPainting.height}</p>
            </div>
 
            <div className='col-start-3 col-end-6 rounded-md text-white text-lg  bg-cOrange py-5  px-2 border-4 border-hBlue'>
                <p>{props.clickedPainting.description}</p>
                <p>{props.clickedPainting.copyrightText}</p>
               
            </div>
            <button  className='col-start-3 bg-jYellow rounded-md text-white text-2xl font-bold col-start-2 py-5  px-2 border-4 border-hBlue' onClick={addToFave}>Add to favourites</button>
        </div> 
   
    )
}

export default ModalInfo