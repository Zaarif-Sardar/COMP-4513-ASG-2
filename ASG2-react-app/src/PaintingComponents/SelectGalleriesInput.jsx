import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from '../Header.jsx'
import GalleryItemOption from './GalleryItemOption.jsx';
//import './App.css'



function SelectGalleriesInput(props) 
{
    const [paintings,setArtist] = useState([]);


    return(
        <select id='galleries' className='border-solid border-2 '>
            {props.galleries?.map(g => <GalleryItemOption
            gallery={g}
            key={g.galleryId} 
            id={g.galleryId} 
            name={g.galleryName} 
         />)}
        </select>
        
    )
}

export default SelectGalleriesInput