import { useState, useRef, useEffect } from 'react'
import Menu from '../Menu/Menu'
import './Filmes.css'

function Filmes() {

  const [currentMovies, setCurrentMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const inputRef = useRef(null)
  const searchMovies = inputRef.current?.value
  

  function openModal(filme) {
    setSelectedMovie(filme)
    setModal(true)
  }

  function closeModal() {
    setModal(false)
  }
  
  async function handleSearchMovie() {
    try {
      setLoading(true)
      await new Promise (resolve => setTimeout(resolve, 1000))
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      const jsonData = await response.json()
      setCurrentMovies(jsonData)
      {console.log(jsonData)}
      
    } catch (err) { 
      console.error(err)
    } finally {
      setLoading(false)
     }
    
  }

   useEffect(() => {
  if (window.AOS) {
    window.AOS.init({ duration: 1000 });
  }
  handleSearchMovie();
}, []);

useEffect(() => {
  if (window.AOS) {
    window.AOS.refresh();
  }
}, [currentMovies]);


  return (
    <>
      <Menu input={<input type="text" ref={inputRef} placeholder='Buscar...' onChange={handleSearchMovie} />} />
        
        {loading &&
          <div className="carrega">
          <p className='loading'></p>
          <p>Carregando...</p>
        </div>
        }

      <div className="filmes">
          {currentMovies?.results?.map((filme, index) => (
            filme.title.toUpperCase().includes(searchMovies.toUpperCase()) &&
              <ul key={filme.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <figure>
                  {filme.poster_path &&
                    <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.title} onClick={() => openModal(filme)} />
                  }
                  <figcaption className='classific' style={filme.vote_average < 7 ? {backgroundColor: 'rgb(252, 49, 49)'} : {backgroundColor: 'rgb(182, 255, 156)'}}><b>{filme.vote_average}</b></figcaption>
                  <li className='titulo'>{filme.title}</li>
                </figure>
              </ul>
          ))}
        </div>

        {modal &&
        <div className="modalAberto">
          <button onClick={closeModal} className='btn'>X</button>
          <img src={`https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}`} alt={selectedMovie.title} />
          <div className="especificacoesFilme">
            <h1>{selectedMovie.title}</h1>
            <p><b>Resumo: </b>{selectedMovie.overview}</p>
            <p><b>Popularidade: </b>{selectedMovie.popularity}</p>
            <p><b>Data de lançamento: </b>{selectedMovie.release_date}</p>
            <p><b>Votos: </b>{selectedMovie.vote_count}</p>
            <p><b>Nota: </b>{selectedMovie.vote_average}</p>
          </div>
        </div>
        }
    </>
  )
}

export default Filmes