import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import PLI from './PLI.jsx'

//import './App.css'



function PaintingList(props) 
{
    const handleClick = (e) => {
       // props.update(props.id);
    }

    return(
        <ul className='py-4 px-4 '>
             {props.paintings?.map(p => <PLI painting={p} key={p.paintingId} id={p.paintingId} name={p.title} update={props.update} gID={props.galleryId}/>)}
        </ul>
            

    )
}

export default PaintingList