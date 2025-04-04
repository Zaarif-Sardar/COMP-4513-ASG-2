import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import GenreCard from './GenreCard.jsx'
//import './App.css'



function GenreInfoColumn(props) 
{

    
    return(
        <div className='border-4 border-solid col-span-2'>
           <GenreCard 
           name={props.genres.genreName}
           desc={props.genres.description}
           link={props.genres.wikiLink}
           />
        </div>
       
            


    )
}

export default GenreInfoColumn