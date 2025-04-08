import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from '../Header.jsx'
 

//import './App.css'



function ArtistItemOption(props) 
{
    
    return(
        <option value={props.id}>{props.name}</option>
    )
}

export default ArtistItemOption