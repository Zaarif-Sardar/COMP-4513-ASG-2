import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import ArtistsListItem from './ArtistsListItem.jsx'

//import './App.css'



function ArtistsList(props) 
{
  console.log(props.artists)
    return(
        <div className='py-4 px-4 border-4 border-solid'>
            <ul className=' list-none'>
              { 
           
              props.artists?.map(a => <ArtistsListItem 
                artist={a} 
                key={a.artistId} 
                id={a.artistId} 
                fName={a.firstName} 
                lName={a.lastName} 
                nationality={a.nationality} 
                gender={a.gender} 
                birthDate={a.yearOfBirth} 
                deathDate={a.yearOfDeath} 
                url={a.artistLink}
                detail={a.details}
                update={props.update}/>)
              }
            </ul>

        </div>
       
            


    )
}

export default ArtistsList