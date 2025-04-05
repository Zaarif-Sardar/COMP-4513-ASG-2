import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from '../Header.jsx'
import PaintingFilter from './PaintingFilter.jsx';
import PaintingsDisplayed from './PaintingsDisplayed.jsx';

//import './App.css'



function Paintings(props) 
{
    const [filteredPaintings,setFilteredPaintings] = useState([]);

    const handleFilter = (option, optVal) => 
        {
            const fpaintings = props.paintings.filter(p => p.artists.artistId == optVal)
            console.log(optVal)
            setFilteredPaintings([...fpaintings]);
            console.log(fpaintings);
        }

    return(
        <article>
            
            <Header/>
            <div className='grid grid-cols-5 w-lg gap-4 my-20 mx-10'>
                <div className='col-start-1 col-end-3'>
                    <PaintingFilter artists={props.artists} galleries={props.galleries} submitHandler={handleFilter}/>
                </div>
                <div className='col-start-3 col-end-6 border-2 border-solid py-2 px-2 h-dv'>
                   <PaintingsDisplayed paintings={filteredPaintings}/>
                </div>


            </div>
        </article>
        
    )
}

export default Paintings