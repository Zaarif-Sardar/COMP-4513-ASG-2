import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'


//import './App.css'



function PLI(props) 
{

    const handleClick = (e) => {
        props.update1(props.id);
        props.sModal();
    }
    return(
        <li onClick={handleClick}  className='py-4 px-4  bg-cOrange hover:bg-jYellow rounded-md my-2 mx-2 border-2 border-hBlue' >
            <div className='flex  content-center   hover:bg-grey-500'> 
                <div className='my-5 mr-5'>
                    <img src={props.imgFile}/>
                </div>
                <div className=' content-center my-5 mx-5 '>
                    <p>{props.name}</p>
                    <p>By: {props.aName}</p>
                    <p>Made in: {props.year}</p>
                </div>
            </div> 
            
        </li>
            

    )
}

export default PLI