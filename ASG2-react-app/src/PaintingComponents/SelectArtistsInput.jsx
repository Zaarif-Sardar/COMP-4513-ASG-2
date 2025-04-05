import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from '../Header.jsx'
import PaintingFilter from './PaintingFilter.jsx';
import ArtistItemOption from './ArtistItemOption.jsx';

//import './App.css'



function SelectArtistsInput(props) 
{
    const [paintings,setArtist] = useState([]);


    return(
        <select id='artists' className='border-solid border-2' onChange={props.onChange} >
            {props.artists?.map(a => <ArtistItemOption
            artists={a}
            key={a.artistId} 
            id={a.artistId} 
            name={a.firstName + ' ' + a.lastName} 
            onChange={props.onChange}
         />)}
        </select>
        
    )
}

export default SelectArtistsInput