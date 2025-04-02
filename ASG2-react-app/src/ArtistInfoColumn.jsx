import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import ArtistCard from './ArtistCard.jsx'
//import './App.css'



function ArtistsInfoColumn(props) 
{
    return(
        <div className='border-4 border-solid col-span-2'>
           <ArtistCard 
           fName={props.artist.firstName}
           lName={props.artist.lastName}
           gender={props.artist.gender}
           nationality={props.artist.nationality}
           deathDate={props.artist.yearOfDeath}
           birthDate={props.artist.yearOfBirth}
           artistLink={props.artist.artistLink}
           />
        </div>
       
            


    )
}

export default ArtistsInfoColumn