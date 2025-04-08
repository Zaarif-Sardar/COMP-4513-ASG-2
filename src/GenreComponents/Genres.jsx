import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from '../Header.jsx'
import GenresList from './GenresList.jsx';
import GenreInfoColumn from './GenreInfoColumn.jsx';
import GenrePaintings from './GenrePaintings.jsx';




function Genres(props) 
{
    const [genres,setGenres] = useState([]);
    const [paintingsIDsForGenre,setPaintingsIDsForGenre] = useState([]);
    const [paintingsFromGenre,setPaintingsFromGenre] = useState([]);
    
 //Get Genres/Paintings info
 
   

    const clickedGenre = (id) =>
        {
            const chosenGenre= props.genres.find(g => g.genreId == id);
            setGenres(chosenGenre);
            
            const step1 = props.gp.filter(g => g.genreId == id);
            console.log(step1);
            const results = []
            step1.forEach(p1 => { props.paintings.forEach(p2 =>
                {if(p2.paintingId == p1.paintingId)
                {
                    results.push(p2);
                    console.log(results);
                    setPaintingsFromGenre([...results])

                }

            })
                
            });
    }
   
        
    return(
        <article className='h-dvh'>
            <Header artists={props.artists}/>
            <div className='grid grid-cols-5 w-lg gap-4 my-20 mx-1 h-dvh'>
            <GenresList genres={props.genres} update={clickedGenre}/>
            <GenreInfoColumn genres={genres}/>
            <GenrePaintings gpPaintings={paintingsFromGenre}/>
            
            </div>
        </article>
        
    )
}

export default Genres