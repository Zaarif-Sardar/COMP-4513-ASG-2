import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from '../Header.jsx'
import ArtistsList from './ArtistsList.jsx'
import ArtistsInfoColumn from './ArtistInfoColumn.jsx'
import ArtistPaintings from './ArtistPaintings.jsx'
//import './App.css'



function Artists(props) 
{
    const [artist,setArtist] = useState([]);
    const [paintingsForArtist,setPaintingsForArtist] = useState([]);

    const clickedArtist = (id) =>
        {
            const chosenArtist = props.artists.find(a => a.artistId == id);
            setArtist(chosenArtist);
            
            const psFromA = props.paintings.filter(p => p.artists.artistId == id);
            setPaintingsForArtist(psFromA);

            
        }
   
        
    return(
        <article className='h-dvh '>
            <Header artists={props.artists}/>
            <div className='grid grid-cols-5 w-lg gap-4 my-20 mx-10'>
            <ArtistsList artists={props.artists} update={clickedArtist}/>
            <ArtistsInfoColumn artist={artist}/>
            <ArtistPaintings aPaintings={paintingsForArtist}/>
            
            </div>
        </article>
        
    )
}

export default Artists