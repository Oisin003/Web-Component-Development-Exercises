import './App.css';

function MovieCard({ title, genre, runTime, image }) {
  return (
    <div className="movie-card">
      <div className="movie-card-left">
        <div className="movie-card-title">{title}</div>
        <div className="movie-card-description">
          <div className="desc-title">Description</div>
          <div className="desc-text">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </div>
        <div className="movie-card-actors">Actors</div>
        <div className="movie-card-meta">
          <span><strong>Genre:</strong> {genre}</span> | <span><strong>Runtime:</strong> {runTime} min</span>
        </div>
      </div>
      <div className="movie-card-image">
        {image ? <img src={image} alt={title} /> : <span>Movie Image</span>}
      </div>
    </div>
  );
}

function Movies() {
  const movieList = [
    { 
      id: 1, 
      title: "12 Angry Men", 
      genre: "Drama", 
      runTime: 129, 
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQLu6fLtsTwfKrQhpWzr9YtjqsdjIufAFRzswHTqkANXYkLFOtu&psig=AOvVaw2jqsK6lffqhkSaou-RT6Uz&ust=1758656318836000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC0w7yP7Y8DFQAAAAAdAAAAABAE" 
    },
    { 
      id: 5, 
      title: "3 Days of the Condor", 
      genre: "Thriller", 
      runTime: 117, 
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSS4DowXQ8kMVcZQ3cid0fApmfUAT7Q56Zib-Y48vg7FSTx60Vc&psig=AOvVaw3SL9_rcnVugGEyK1TFBdU3&ust=1758656288162000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOic0K-P7Y8DFQAAAAAdAAAAABAE" 
    },
    { 
      id: 81, 
      title: "The Hateful Eight", 
      genre: "Western", 
      runTime: 205, 
      image: "https://upload.wikimedia.org/wikipedia/en/d/d4/The_Hateful_Eight.jpg" 
    }
  ];

  return (
    <div className="movies-container">
      <h2>Movie List</h2>
      <div className="movie-list">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
