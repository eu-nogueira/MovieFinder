

function Movies({handleColor, openModal, searchMovies, currentMovies}) {
    
  return (
     <div className="filmes">
          {currentMovies?.results?.filter((filme) => 
            filme.title.toUpperCase().includes(searchMovies.toUpperCase()))
            .sort((a, b) => a.title.localeCompare(b.title)).map((filme, index) => (
              <ul key={filme.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <figure>
                  {filme.poster_path &&
                    <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.title} onClick={() => openModal(filme)} />
                  }
                  <figcaption className={handleColor(filme.vote_average)} style={{margin: '10px auto'}}>
                    <b>{filme.vote_average.toFixed(1)}</b>
                  </figcaption>
                  <p className='titulo'>{filme.title}</p>
                </figure>
              </ul>
          ))}
        </div>
  )
}

export default Movies