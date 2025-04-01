import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'


//import './App.css'



function PLI(props) 
{
    
    return(
        <li className='py-4 px-4 border-2 border-solid hover:bg-stone-500' >
            <div className='flex  justify-around  content-center border-1 border-solid hover:bg-grey-500'> 
                <div>
                    <img src={props.imgFile}/>
                </div>
                <div>
                    <p>{props.name}</p>
                    <p>By: {props.aName}</p>
                    <p>Made in: {props.year}</p>
                </div>
            </div> 
            
        </li>
            

    )
}

export default PLI