import React from 'react'
import './Modal.css'

function Modal({closeModal, selectedMovie}) {
  return (
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
  )
}

export default Modal