import './App.css';

function Movies() {
  const movieList = [
    {
      id: 1,
      title: "12 Angry Men",
      genre: "Drama",
      Actor: "Henry Fonda, Lee J. Cobb, Martin Balsam",
      runTime: 129,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQLu6fLtsTwfKrQhpWzr9YtjqsdjIufAFRzswHTqkANXYkLFOtu&psig=AOvVaw2jqsK6lffqhkSaou-RT6Uz&ust=1758656318836000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC0w7yP7Y8DFQAAAAAdAAAAABAE",
      description: "A drama centered on a jury deliberating the fate of an 18-year-old accused of murder, unfolding in a single hot jury room in 1950s New York."
    },
    {
      id: 5,
      title: "3 Days of the Condor",
      genre: "Thriller",
      runTime: 117,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSS4DowXQ8kMVcZQ3cid0fApmfUAT7Q56Zib-Y48vg7FSTx60Vc&psig=AOvVaw3SL9_rcnVugGEyK1TFBdU3&ust=1758656288162000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOic0K-P7Y8DFQAAAAAdAAAAABAE",
      description: "A 1975 American conspiracy thriller film about CIA researcher Joe Turner (Robert Redford), who returns from lunch to find his colleagues murdered, leading him to uncover a conspiracy within the agency and become a target himself."
    },
    {
      id: 81,
      title: "The Hateful Eight",
      genre: "Western",
      Actor: "",
      runTime: 205,
      image: "https://upload.wikimedia.org/wikipedia/en/d/d4/The_Hateful_Eight.jpg",
      description: "A group of eight strangers, including bounty hunters, find themselves trapped in a remote stagecoach stopover during a deadly Wyoming blizzard, leading to a tense atmosphere of suspicion, betrayal, and violence." 
    }
  ];

  return (
    <div className="movies-container">
      <h2>Movie List</h2>
      <ul className="movie-list">
        {movieList.map((movie) => (
          <li key={movie.id} className="movie-item">
            <img src={movie.image} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <h4>Actors</h4>
              {/* <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Runtime:</strong> {movie.runTime} min</p> */}
              <p>{movie.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
