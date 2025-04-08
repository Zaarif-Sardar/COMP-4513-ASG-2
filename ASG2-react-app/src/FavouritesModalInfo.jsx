import { useState, useEffect, useContext } from 'react'
import { Routes, Route} from 'react-router-dom'
import { FavouriteContext } from './App.jsx';
import FavListItem from './FavListItem.jsx'

//import './App.css'



function FavouritesModalInfo(props) 
{

    const {favourites, setFavourites} = useContext(FavouriteContext);


    const favArtists = favourites.filter(f => f.favType == 'A');
    const favGalleries = favourites.filter(f => f.favType == 'G');
    const favPaintings = favourites.filter(f => f.favType == 'P');

    const clearAll =  () => 
        {
            setFavourites([]);
        }
    const removeSingle = (selected) => 
        {
            const newFavs = favourites.filter(f => f.id !== selected);
            console.log(newFavs);
            setFavourites([...newFavs]);
        }


    return(
        <div className='bg-cBlue rounded-md '>
                <div className='flex justify-end w-auto'>
                    <button className='bg-jYellow rounded-md text-white text-3xl font-bold col-start-2 py-5 px-5  mt-5 mr-5 border-4 border-hBlue' onClick={clearAll}>Empty Favourites</button>
                </div>
            <div className='grid grid-cols-3 w-lg gap-10 my-5 mx-10'>
                <div className=' bg-hBlue border-2 border-solid border-cBlue rounded-md text-white'>
                    <p className='text-center text-2xl'>Artists</p>
                    <ul>
                        {favArtists?.map( f => <FavListItem name={f.name} id={f.id} update={removeSingle}/>  )}
                    </ul>
                </div>

                <div className=' bg-hBlue border-2 border-solid border-cBlue rounded-md text-white'>
                    <p className='text-center text-2xl'>Galleries</p>
                    <ul >
                        {favGalleries?.map( f => <FavListItem name={f.name }  id={f.id} update={removeSingle} />  )}
                    </ul>
                </div>
        
                <div className=' bg-hBlue border-2 border-solid border-cBlue rounded-md text-white'>
                     <p className='text-center text-2xl'>Paintings</p>
                    <ul >
                        {favPaintings?.map( f => <FavListItem name={f.name}  id={f.id}  update={removeSingle} />  )}
                    </ul>
                </div>

            </div>

        </div>

     
   
    )
}

export default FavouritesModalInfo