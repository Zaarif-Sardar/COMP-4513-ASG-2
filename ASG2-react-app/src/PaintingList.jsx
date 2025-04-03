import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import PLI from './PLI.jsx'

//import './App.css'



function PaintingList(props) 
{
  
    return(
        <ul className='py-4 px-4 '>
             {props.paintings?.map(p => <PLI 
             painting={p} 
             key={p.paintingId}
            id={p.paintingId} 
            name={p.title} 
            update={props.update} 
            gID={props.galleryId}
            aName={p.artists.firstName + ' ' + p.artists.lastName} 
            year={p.yearOfWork}
            sModal={props.sM}
            update1={props.update1}
            imgFile={`https://res.cloudinary.com/funwebdev/image/upload/w_100/art/paintings/square/${p.imageFileName}.jpg`} />)}
        
        </ul> 

            

    )
}

export default PaintingList