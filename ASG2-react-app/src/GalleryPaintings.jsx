import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import PaintingsList from './PaintingList.jsx'
import PaintingOptions from './PaintingOptions.jsx'
//import './App.css'



function GalleryPaintings(props) 
{
    const [sortedPaintings,setSortedPaintings] = useState([]);

    const sortBy = (value) =>
        {
            switch(value)
            {
                case 'artist':
                    const sP = props.paintings.sort((a,b) => a.artists.firstName.localeCompare(b.artists.firstName));
                    setSortedPaintings(sP);
                    console.log(sP);
                    break;
                case 'thumbnail':
                    console.log('idk');
                    break;
                case 'year':
                    const sortedByYear = props.paintings.sort((a,b) => a.yearOfWork - b.yearOfWork);
                    setSortedPaintings([...sortedByYear]);
                    console.log(sortedByYear);
                    break;
                default:
                    console.log("hello");
                    setSortedPaintings([...props.paintings]);
            }
        }
    return(
        <div className='border-4 border-solid col-span-2'>
            <PaintingOptions update={sortBy}/>
           <PaintingsList paintings={sortedPaintings}/>
        </div>
       
    )
}
export default GalleryPaintings