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
        <div>
                <div>
                    <button onClick={clearAll}>Empty Favourites</button>
                    <button>Remove</button>
                </div>
            <div className='grid grid-cols-4 w-lg gap-10 my-20 mx-10'>
            
                <div className=' bg-stone-500'>
                    <p>Artists</p>
                    <ul className='bg-neutral-50'>
                        {favArtists?.map( f => <FavListItem name={f.name} id={f.id} update={removeSingle}/>  )}
                    </ul>
                </div>

                <div className=' bg-stone-500'>
                    <p>Galleries</p>
                    <ul className='bg-neutral-50'>
                        {favGalleries?.map( f => <FavListItem name={f.name }  id={f.id} update={removeSingle} />  )}
                    </ul>
                </div>
        
                <div className='col-start-3 col-end-5 bg-stone-500'>
                     <p>Paintings</p>
                    <ul className='bg-neutral-50'>
                        {favPaintings?.map( f => <FavListItem name={f.name}  id={f.id}  update={removeSingle} />  )}
                    </ul>
                </div>

            </div>

        </div>

     
   
    )
}

export default FavouritesModalInfo