import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'


//import './App.css'



function PLI(props) 
{
   
    return(
        <li className='py-4 px-4 border-2 border-solid hover:bg-stone-500' >
            {props.name}
        </li>
            

    )
}

export default PLI