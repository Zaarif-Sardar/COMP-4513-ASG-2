import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'

//import './App.css'



function ArtistCard(props) 
{
    return(
        
            <div className=''>
                <p className='text-7xl border-solid py-2 px-2'>{props.fName} {props.lName}</p>
                <p className='text-3xl py-1 px-2'>{props.gender}, born in {props.nationality}</p>
                <p className='text-2xl py-1 px-2'>Born in the year of {props.birthDate}</p>
                <p className='text-2xl py-1 px-2'>Passed away in the year of {props.deathDate}</p>
                <a className='text-2xl py-1 px-2' href={props.artistLink} >Visit their Site </a>
            </div>    
   
       
            


    )
}

export default ArtistCard