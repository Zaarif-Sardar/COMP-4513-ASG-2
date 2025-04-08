import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import ArtistCard from './ArtistCard.jsx'



function ArtistsInfoColumn(props) 
{

    
    return(
        <div className='h-auto col-span-2 border-4 border-solid border-hBlue bg-cBlue col-span-2 rounded-md shadow-md'>
           <ArtistCard 
           fName={props.artist.firstName}
           lName={props.artist.lastName}
           gender={props.artist.gender}
           nationality={props.artist.nationality}
           deathDate={props.artist.yearOfDeath}
           birthDate={props.artist.yearOfBirth}
           artistLink={props.artist.artistLink}
           artist={props.artist}
           id={props.artist.artistId}
           
           />
        </div>
       
            


    )
}

export default ArtistsInfoColumn