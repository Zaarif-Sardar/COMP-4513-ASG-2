import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import GalleryListItem from './GalleryListItem.jsx'

//import './App.css'



function ListColumn(props) 
{

    return(
        <div className='py-4 px-4 border-4 border-solid'>
            <ul className=' list-none'>
              { 
           
              props.galleries.map(g => <GalleryListItem gallery={g} key={g.galleryId} id={g.galleryId} name={g.galleryName} update={props.update} />)
              
              }
            </ul>

        </div>
       
            


    )
}

export default ListColumn