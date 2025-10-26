import { useState, useEffect } from 'react'
import Menu from '../../components/Menu/Menu'
import './Filmes.css'
import Carregando from '../../components/Carregando/Carregando'
import Modal from '../../components/Modal/Modal'
import Movies from '../../components/Movies/Movies'
import Rodape from '../../components/Footer/Rodape'

function Filmes() {

  const [currentMovies, setCurrentMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [searchMovies, setSearchMovies] = useState('')
  

  function openModal(filme) {
    setSelectedMovie(filme)
    setModal(true)
  }

  function closeModal() {
    setModal(false)
  }

  async function handleRequest() {
  try {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      const jsonData = await response.json()
      setCurrentMovies(jsonData)
      } catch (err) { 
      console.error(err)
      } finally {
      setLoading(false)
     }
  }
  
  async function handleSearchMovie(e) {
      setSearchMovies(e.target.value)
      setLoading(true)
      await new Promise (resolve => setTimeout(resolve, 1000)) // Simular tela de carregamento
      handleRequest()
  }

  function handleColor(voto) {
   return voto <= 5 ? 'baixa' : voto <= 7 ? 'media' : 'alta'
  }

   useEffect(() => {
  if (window.AOS) {
    window.AOS.init({ duration: 1000 });
  }
  handleRequest();
}, []);

useEffect(() => {
  if (window.AOS) {
    window.AOS.refresh();
  }
}, [currentMovies]);


  return (
    <>
      <Menu input={<input type="text" value={searchMovies} placeholder='Buscar...' onChange={handleSearchMovie} />} />
        
      {loading && <Carregando/>}

      <Movies handleColor={handleColor} searchMovies={searchMovies} currentMovies={currentMovies} openModal={openModal}/>

      {modal && < Modal closeModal={closeModal} selectedMovie={selectedMovie}/>}

      <Rodape />
    </>
  )
}

export default Filmes