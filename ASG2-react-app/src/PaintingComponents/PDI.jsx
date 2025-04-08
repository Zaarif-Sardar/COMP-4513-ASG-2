import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from '../Header.jsx'

//import './App.css'



function PDI(props) 
{
    const handleClick = (e) => {
        props.update1(props.id);
        props.sModal();
    }
   
    return(
            <div className='grid grid-cols-3  border-4 border-solid border-cBlue hover:bg-jYellow bg-cOrange text-white rounded-md' onClick={handleClick}> 
                <div className='my-5 mr-5 col-start-1 col-end-2 place-self-center'>
                    <img src={props.imgFile}/>
                </div>
                <div className=' content-center my-5 mx-5 col-start-2 col-end-3'>
                    <p>{props.title}</p>
                    <p>By: {props.aName}</p>
                    <p>Made in: {props.year}</p>
                    <p>Gallery Name: {props.gName}</p>
                </div>
                <div className=' content-center my-5 mx-5 col-start-3 col-end-4'>
                    <p>Medium:{props.medium}</p>
                    <p>Width:{props.width}</p>
                    <p>Height:{props.height}</p>
                </div>
            </div> 
       
        
        
    )
}

export default PDI