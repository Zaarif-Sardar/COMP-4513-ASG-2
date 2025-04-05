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
        <div>
            <div className=''>
                <img href=""></img>
            </div>   
            <div>
                <p>{props.clickedPainting.title}</p>
                <p>{props.clickedPainting.artists.firstName} {props.clickedPainting.artists.lastName}</p>
                <p>{props.clickedPainting.yearOfWork} {props.clickedPainting.width} {props.clickedPainting.height}</p>
                <p>{props.clickedPainting.artists.artistLink}</p>
                <p>{props.clickedPainting.galleries.galleryName} located in {props.clickedPainting.galleryCity}</p>
                <a href={props.clickedPainting.galleries.galleryWebsite}></a>
                <p>{props.clickedPainting.description}</p>
                <p>{props.clickedPainting.copyrightText}</p>
                <button onClick={addToFave}>Add to favourites</button>
            </div>
        </div> 
   
    )
}

export default ModalInfo