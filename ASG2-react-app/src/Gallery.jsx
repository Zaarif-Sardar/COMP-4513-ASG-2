import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import GalleryList from './GalleryList.jsx'
import GalleryInfo from './GalleryInfo.jsx'
import GalleryPaintings from './GalleryPaintings.jsx'
//import './App.css'



function Gallery(props) 
{
    const [gallery,setGallery] = useState([]);
    const clickedGallery = (id) =>
        {

            const chosenGallery = props.galleries.find(g => g.id == id);
            console.log(chosenGallery)

            setGallery([...gallery],chosenGallery);
            console.log(gallery)
        }
    return(
        <div className='grid grid-cols-3 divide-solid'>
            <GalleryList galleries={props.galleries} update={clickedGallery}/>
            <GalleryInfo gallery={gallery}/>
            <GalleryPaintings/>
        </div>
    )
}

export default Gallery