import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from '../Header.jsx'
import PDI from './PDI.jsx'
//import './App.css'



function PaintingsDisplayed(props) 
{
    
   
        
    return(
        <div className=' grid-col-2 border-solid border-2'>
        
     
                {props.paintings?.map(p =><PDI
                title={p.title}
                painting={p} 
                key={p.paintingId}
                id={p.paintingId} 
                update={props.update} 
                aName={p.artists.firstName + ' ' + p.artists.lastName} 
                gName={p.galleries.galleryName}
                width={p.width}
                height={p.height}
                medium={p.medium}
                year={p.yearOfWork}
                sModal={props.sM}
                imgFile={`https://res.cloudinary.com/funwebdev/image/upload/w_100/art/paintings/square/${p.imageFileName}.jpg`}
                
                />)}

        </div>
    )
}

export default PaintingsDisplayed