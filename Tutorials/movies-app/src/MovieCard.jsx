import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, description, genre, actors, runTime, image }) => {
  return (
    <div className="movie-card">
      <div className="movie-card-left">
        <div className="movie-card-title">{title}</div>
        <div className="movie-card-description">
          <div className="desc-title">Description</div>
          <div className="desc-text">{description}</div>
        </div>
        <div className="movie-card-actors">
          <strong>Actors:</strong> {actors && actors.length ? actors.join(', ') : 'N/A'}
        </div>
        {/* <div className="movie-card-meta">
          <span><strong>Genre:</strong> {genre}</span> | <span><strong>Runtime:</strong> {runTime} min</span>
        </div> */}
      </div>
      <div className="movie-card-image">
        {image ? <img src={image} alt={title} /> : <span>Movie Image</span>}
      </div>
    </div>
  );
};

export default MovieCard;
