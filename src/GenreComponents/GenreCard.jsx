import { useState, useEffect, useContext } from 'react'
import { Routes, Route} from 'react-router-dom'


//import './App.css'



function GenreCard(props) 
{
    

    return(
        
            <div className=' text-white bg-cOrange rounded-md border-2 border-hBlue p-4'>
                <p className='text-7xl border-solid py-2 px-2'>{props.name}</p>
                <p className='text-3xl py-1 px-2'>{props.desc}</p>
                <a className='text-2xl py-1 px-2 text-rBlack font-bold' href={props.link} >Learn More about {props.name} </a>
                <img  className='size-80'src={`/genres/${props.id}.jpg`}/>
            </div> 
         
    
   
       
            


    )
}

export default GenreCard