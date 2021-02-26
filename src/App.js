import logo from './logo.svg';
import './App.css';
import Student from './student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React!
        </p>
        <h1>
          This build was by <a href="mailto:wasimarif602@gmail.com">waseem602</a> !
        </h1>
        <h2>
          Git Repo: <a href="https://github.com/waseem602/react-app">here</a>.
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Student name="Kashif"/>
        <Student rollNo="263"/>
      </header>
    </div>
  );
}

export default App;
