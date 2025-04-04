import { useState, useEffect, createContext } from 'react'
import { Routes, Route} from 'react-router-dom'
import  LogIn from './LogIn.jsx'
import Gallery from './GalleryComponents/Gallery.jsx'
import Artists from './ArtistsComponents/Artists.jsx'
import Genres from './GenreComponents/Genres.jsx'

import './App.css'

export const FavouriteContext = createContext();

function App() {
  const [favourites,setFavourites] = useState([])
  const [count, setCount] = useState(0)
  const [artists, setArtists] = useState([])
  const [paintings, setPaintings] = useState([])
  const [galleries, setGalleries] = useState([])
  const [genres, setGenres] = useState([])
  const [gp, setGP] = useState([])

  //Get Artists info
  
  useEffect(() =>
    {
      console.log("USE EFFECT 3")
      const url = 'https://comp4513-asg1-7ly9.onrender.com/api/artists'
      const savedArtists = localStorage.getItem('artistsFromAPI');
      if(savedArtists)
        {
          setArtists(JSON.parse(savedArtists));
        }
        else
          {
            fetch(url, {mode:'cors'})
            .then(resp => resp.json())
            .then(data => {
              setArtists(data)
              localStorage.setItem('artistsFromAPI',JSON.stringify(data));})
            .catch(err => console.error(err))
          } 

    },[]);
  //Get Paintings info
  useEffect(() =>
    {
      console.log("USE EFFECT 1")
      const url = 'https://comp4513-asg1-7ly9.onrender.com/api/paintings'
      const savedPaintings = localStorage.getItem('paintingsFromAPI');
      if(savedPaintings)
        {
          setPaintings(JSON.parse(savedPaintings));
        
        }
        else
          {
            fetch(url, {mode:'cors'})
            .then(resp => resp.json())
            .then(data => {
              setPaintings(data)
              localStorage.setItem('paintingsFromAPI',JSON.stringify(data));})
            .catch(err => console.error(err))
          } 
      },[]);


  //Get Galleries info
  useEffect(() =>
    {
      console.log("USE EFFECT 2")
      const url = 'https://comp4513-asg1-7ly9.onrender.com/api/galleries'
      const savedGalleries = localStorage.getItem('galleriesFromAPI');
      if(savedGalleries)
      {
        setGalleries(JSON.parse(savedGalleries));
      
      }
      else
        {
          fetch(url, {mode:'cors'})
          .then(resp => resp.json())
          .then(data => {
            setGalleries(data)
            localStorage.setItem('galleriesFromAPI',JSON.stringify(data));})
          .catch(err => console.error(err))
        } 
    },[]);
    
  //Get Genres info
  useEffect(() =>
    {
      console.log("USE EFFECT 1")
      const url = 'https://comp4513-asg1-7ly9.onrender.com/api/genres'
      const savedGenres = localStorage.getItem('genresFromAPI');
      if(savedGenres)
        {
          setGenres(JSON.parse(savedGenres));
        
        }
        else
          {
            fetch(url, {mode:'cors'})
            .then(resp => resp.json())
            .then(data => {
              setGenres(data)
              localStorage.setItem('genresFromAPI',JSON.stringify(data));})
            .catch(err => console.error(err))
          } 
    },[]);

    //Get Genres/painting info
  useEffect(() =>
    {
      console.log("USE EFFECT 5")
      const url = 'https://comp4513-asg1-7ly9.onrender.com/api/paintings/paintings/genres'
      const savedGP = localStorage.getItem('gpFromAPI');
      if(savedGP)
        {
          setGP(JSON.parse(savedGP));
        
        }
        else
          {
            fetch(url, {mode:'cors'})
            .then(resp => resp.json())
            .then(data => {
              setGP(data)
              localStorage.setItem('gpFromAPI',JSON.stringify(data));})
            .catch(err => console.error(err))
          } 
    },[]);

  
 
  return (
    <>
      <main>
        <FavouriteContext.Provider value={{favourites,setFavourites}}>
          <Routes>
            <Route path ='/' element={<LogIn/>}/>
            <Route path ='/gallery' element={<Gallery galleries={galleries} paintings={paintings} artists={artists}/>}/>
            <Route path ='/artists' element={<Artists paintings={paintings} artists={artists} galleries={galleries}/>}/>
            <Route path ='/genres' element={<Genres paintings={paintings} genres={genres} gp={gp}/>}/>

          </Routes>
        </FavouriteContext.Provider>
      </main>
      
    </>
  )
}

export default App
