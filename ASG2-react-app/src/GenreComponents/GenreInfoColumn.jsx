import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import GenreCard from './GenreCard.jsx'
//import './App.css'



function GenreInfoColumn(props) 
{

    
    return(
        <div className='h-dvh border-4 border-solid border-hBlue bg-cBlue col-span-2 rounded-md shadow-md p-5'>
           <GenreCard 
           name={props.genres.genreName}
           desc={props.genres.description}
           link={props.genres.wikiLink}
           id={props.genres.genreId}
           />
        </div>
       
            


    )
}

export default GenreInfoColumn