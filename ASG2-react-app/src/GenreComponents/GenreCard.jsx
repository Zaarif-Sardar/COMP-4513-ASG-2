import { useState, useEffect, useContext } from 'react'
import { Routes, Route} from 'react-router-dom'


//import './App.css'



function GenreCard(props) 
{
    

    return(
        <div>
            <div className=''>
                <p className='text-7xl border-solid py-2 px-2'>{props.name}</p>
                <p className='text-3xl py-1 px-2'>{props.desc}</p>
                <a className='text-2xl py-1 px-2' href={props.link} >Learn More about {props.name} </a>
            </div> 
         
        </div>
   
       
            


    )
}

export default GenreCard