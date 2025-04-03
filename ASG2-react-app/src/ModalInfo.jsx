import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'

//import './App.css'



function ModalInfo(props) 
{
    console
    return(
        <div>
            <div className=''>
                <img href=""></img>
            </div>   
            <div>
                <p>{props.clickedPainting.title}</p>
                <p>{props.clickedPainting.artists.firstName} {props.clickedPainting.artists.lastName}</p>
                <p>{props.clickedPainting.yearOfWork} {props.clickedPainting.width} {props.clickedPainting.height}</p>
                <p>{props.clickedPainting.artists.artistLink}</p>
                <p>{props.clickedPainting.galleries.galleryName} located in {props.clickedPainting.galleryCity}</p>
                <a href={props.clickedPainting.galleries.galleryWebsite}></a>
                <p>{props.clickedPainting.description}</p>
                <p>{props.clickedPainting.copyrightText}</p>
            </div>
        </div> 
   
    )
}

export default ModalInfo