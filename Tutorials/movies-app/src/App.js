import './App.css';
import MovieCard from './MovieCard';
import movieList from './movies';

function App() {
  return (
    <div className="App">
      <header className="custom-header">
        <h1>ATU</h1>
      </header>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        {movieList.map((movie) => (
          <MovieCard
            // key={movie.id}
            title={movie.title}
            description={movie.description}
            // genre={movie.genre}
            actors={movie.actors}
            // runTime={movie.runTime}
            image={movie.image}
          />
        ))}
      </div>
      <footer className="custom-footer">
        &copy; {new Date().getFullYear()} ATU. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
