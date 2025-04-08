import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import GalleryListItem from './GalleryListItem.jsx'
import GalleryCard from './GalleryCard.jsx'



function GalleryInfo(props) 
{
    return(
        <div className=' h-auto border-4 border-solid border-hBlue bg-cBlue col-span-2  rounded-md shadow-md'>
           <GalleryCard 
           galleryNativeName={props.gallery.galleryNativeName} 
           galleryName={props.gallery.galleryName} 
           galleryWebSite={props.gallery.galleryWebSite}
           galleryCity={props.gallery.galleryCity}
           galleryCountry={props.gallery.galleryCountry}
           gallery={props.gallery}
           galleryId={props.galleryId}
           />
        </div>
       
            


    )
}

export default GalleryInfo