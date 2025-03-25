import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [artists, setArtists] = useState([])
  const [paintings, setPaintings] = useState([])
  const [galleries, setGalleries] = useState([])
  const [genres, setGenres] = useState([])

  //Get Artists info
  useEffect(() =>
    {
      console.log("USE EFFECT 1")
      const url = 'https://comp4513-asg1-7ly9.onrender.com/api/artists'
      if(artists.length <=0)
        {
          fetch(url, {mode:'cors'})
          .then(resp => resp.json())
          .then(data => setArtists(data))
          .catch(err => console.error(err))
        }

    },[]);
  //Get Paintings info
  useEffect(() =>
    {
      console.log("USE EFFECT 1")
      const url = 'https://comp4513-asg1-7ly9.onrender.com/api/paintings'
      if(paintings.length <=0)
        {
          fetch(url, {mode:'cors'})
          .then(resp => resp.json())
          .then(data => setPaintings(data))
          .catch(err => console.error(err))
        }

    },[]);
  //Get Galleries info
  useEffect(() =>
    {
      console.log("USE EFFECT 1")
      const url = 'https://comp4513-asg1-7ly9.onrender.com/api/galleries'
      if(galleries.length <=0)
        {
          fetch(url, {mode:'cors'})
          .then(resp => resp.json())
          .then(data => setGalleries(data))
          .catch(err => console.error(err))
        }

    },[]);
  //Get Genres info
  useEffect(() =>
    {
      console.log("USE EFFECT 1")
      const url = 'https://comp4513-asg1-7ly9.onrender.com/api/genres'
      if(genres.length <=0)
        {
          fetch(url, {mode:'cors'})
          .then(resp => resp.json())
          .then(data => setGenres(data))
          .catch(err => console.error(err))
        }

    },[]);

  return (
    <>
      <div>
      <button 
        onClick={ () => { alert(" BOO! ")} }>Click me </button>
      </div>
      {console.log(artists)}
      {console.log(paintings)}
      {console.log(galleries)}
      {console.log(genres)}
    </>
  )
}

export default App
