import { useState, useRef, useEffect } from 'react'
import Menu from '../Menu/Menu'
import './Filmes.css'

function Filmes() {

  const [currentMovies, setCurrentMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)
  const searchMovies = inputRef.current?.value
  
  async function handleSearchMovie() {
    try {
      setLoading(true)
      await new Promise (resolve => setTimeout(resolve, 1000))
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
                    <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.title} />
                  }
                  <figcaption className='classific'>{filme.vote_count}</figcaption>
                  <li className='titulo'>{filme.title}</li>
                </figure>
              </ul>
          ))}
        </div>
    </>
  )
}

export default Filmes