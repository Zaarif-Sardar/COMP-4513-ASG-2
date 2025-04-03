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
        <li onClick={handleClick}  className='py-4 px-4 border-2 border-solid hover:bg-stone-500' >
            <div className='flex  content-center border-1 border-solid hover:bg-grey-500'> 
                <div className='my-5 mr-5'>
                    <img src={props.imgFile}/>
                </div>
                <div className=' content-center my-5 mx-5'>
                    <p>{props.name}</p>
                    <p>By: {props.aName}</p>
                    <p>Made in: {props.year}</p>
                </div>
            </div> 
            
        </li>
            

    )
}

export default PLI