import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import GalleryList from './GalleryList.jsx'
import GalleryInfo from './GalleryInfo.jsx'
import GalleryPaintings from './GalleryPaintings.jsx'
//import './App.css'



function Gallery(props) 
{
    const [gallery,setGallery] = useState([]);
    const [paintingsForGallery,setPaintingsForGallery] = useState([]);

    const clickedGallery = (id) =>
        {
            const chosenGallery = props.galleries.find(g => g.galleryId == id);
            setGallery(chosenGallery);
            
            const pFromGByT = props.paintings.filter(p => p.galleryId == id);
            setPaintingsForGallery(pFromGByT);


        }
   
        
    return(
        <div className='grid grid-cols-5 w-lg gap-4 my-20 mx-10'>
            <GalleryList  galleries={props.galleries} update={clickedGallery}/>
            <GalleryInfo gallery={gallery}/>
            <GalleryPaintings paintings={paintingsForGallery} gallery={gallery} />
        </div>
    )
}

export default Gallery