import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import PaintingsList from './PaintingList.jsx'
import PaintingOptions from './PaintingOptions.jsx'
//import './App.css'



function ArtistPaintings(props) 
{
    const [sortedPaintings,setSortedPaintings] = useState([props.aPaintings]);


    const sortBy = (value) =>
        {
            switch(value)
            {
                case 'artist':
                    const  sortedByArtistsName = props.aPaintings.sort((a,b) => a.artists.firstName.localeCompare(b.artists.firstName));
                    setSortedPaintings([...sortedByArtistsName]);
                    console.log(sortedByArtistsName);
                    break;
                case 'thumbnail':
                    console.log('idk');
                    break;
                case 'year':
                    const sortedByYear = props.aPaintings.sort((a,b) => a.yearOfWork - b.yearOfWork);
                    setSortedPaintings([...sortedByYear]);
                    console.log(sortedByYear);
                    break;
                case 'title':
                    const sortedByTitle = props.aPaintings.sort((a,b) => a.title.localeCompare(b.title));
                    setSortedPaintings([...sortedByTitle]);
                    break;
                default:
                    console.log("Default hit");
                    setSortedPaintings([...props.aPaintings]);
            }
    
        }
    return(

        <div className='border-4 border-solid col-span-2'>
            <PaintingOptions update={sortBy}/>
           <PaintingsList paintings={props.aPaintings}/>
        </div>
       
    )
}
export default ArtistPaintings