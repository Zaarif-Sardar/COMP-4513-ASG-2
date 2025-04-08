import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import GenreListItem from './GenreListItem.jsx'

//import './App.css'



function GenreList(props) 
{
    return(
        <div className=' h-dvh leftPart border-4 border-solid border-hBlue bg-cBlue rounded-md overflow-scroll'>
            <ul className=' list-none rounded-md'>
              { 
           
              props.genres?.map(g => <GenreListItem 
                genre={g} 
                key={g.genreId} 
                id={g.genreId} 
                name={g.genreName} 
                desc={g.description}
                link={g.wikiLink}
                update={props.update}
                />)
              }
            </ul>

        </div>
       
            


    )
}

export default GenreList