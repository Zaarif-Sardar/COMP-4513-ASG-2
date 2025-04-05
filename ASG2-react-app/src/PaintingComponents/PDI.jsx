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
            <div className='flex content-center justify-around border-2 border-solid hover:bg-gray-500' onClick={handleClick}> 
                <div className='my-5 mr-5'>
                    <img src={props.imgFile}/>
                </div>
                <div className=' content-center my-5 mx-5'>
                    <p>{props.title}</p>
                    <p>By: {props.aName}</p>
                    <p>Made in: {props.year}</p>
                    <p>Gallery Name: {props.gName}</p>
                </div>
                <div className=' content-center my-5 mx-5'>
                    <p>Medium:{props.medium}</p>
                    <p>Width:{props.width}</p>
                    <p>Height:{props.height}</p>
                </div>
            </div> 
       
        
        
    )
}

export default PDI