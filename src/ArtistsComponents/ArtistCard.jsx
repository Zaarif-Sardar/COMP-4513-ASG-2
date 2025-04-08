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
     
            <div className='grid grid-cols-5 bg-cBlue  my-5 mx-2 rounded-md py-5 px-5 gap-10 h-min '>
                <div  className='col-start-1 col-end-6 text-white bg-cOrange rounded-md border-4 border-hBlue font-bold'> 
                    <p className='text-7xl border-solid py-2 px-2'>{props.fName} {props.lName}</p>
                </div>

                <div className='col-start-1 col-end-4 text-white '><img className='size-full' src={`/artists/full/${props.id}.jpg`}/>  </div>
                <div className='col-start-4 col-end-6 text-white bg-cOrange rounded-md border-2 border-hBlue place-self-center'>  
                    <p className='text-3xl py-1 px-2'>{props.gender}, born in {props.nationality}</p>
                    <p className='text-2xl py-1 px-2'>Born in the year of {props.birthDate}</p>
                    <p className='text-2xl py-1 px-2'>Passed away in the year of {props.deathDate}</p>
                    <a className='text-2xl py-1 px-2 text-rBlack font-bold' href={props.artistLink}>Learn more about them here</a>
                </div>
                
                <button className='bg-jYellow rounded-md text-white text-lg font-bold col-start-3 col-end-4 py-5  border-2 border-hBlue' onClick={addToFave}>Add to Favourites</button>

            </div> 
 

   

     
   
       
            


    )
}

export default ArtistCard