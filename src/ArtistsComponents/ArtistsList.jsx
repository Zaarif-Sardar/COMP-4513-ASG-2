import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import ArtistsListItem from './ArtistsListItem.jsx'




function ArtistsList(props) 
{
    return(
        <div className=' h-dvh leftPart border-solid border-hBlue bg-cBlue rounded-md overflow-scroll'>
            <ul className=' list-none rounded-md'>
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
                update={props.update}
              
                />)

              }
            </ul>

        </div>
       
            


    )
}

export default ArtistsList