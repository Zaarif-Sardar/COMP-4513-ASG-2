import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'

//import './App.css'



function GalleryCard(props) 
{
    return(
        
            <div className=''>
                <p className='text-7xl border-solid py-2 px-2'>{props.galleryName}</p>
                <p className='text-3xl py-1 px-2'>{props.galleryNativeName}</p>
                <p className='text-2xl py-1 px-2'>{props.galleryCity},{props.galleryCountry}</p>
                <a className='text-2xl py-1 px-2' href={props.galleryWebSite} >Visit their Site </a>
            </div>    
   
       
            


    )
}

export default GalleryCard