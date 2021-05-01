import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          <small>
            <a href="https://github.com/AneteCoding/dictionary-project" target="_blank" rel="noreferrer">Open source code </a>
             by <a href="https://www.linkedin.com/in/anete-bogdanova-a5ba366a/" target="_blank" rel="noreferrer">Anete </a>
             and <a href="https://www.netlify.com/" target="_blank" rel="noreferrer"> hosted on Netlify</a>
          </small></footer>
      </div>
    </div>
  );
}

