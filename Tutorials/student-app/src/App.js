import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import DateComponent from './Date.js';
import Movies from './Movies.jsx';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Header />
</div>
      <main>
        <p>
          Hello World!
        </p>
        <DateComponent />
        <Movies />
      </main>
    <div className="App-footer">
      <Footer />
      </div>
    </div>
  );
}

export default App;
