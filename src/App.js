import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-headerCHANGE">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>

      <p>Input test:</p>
      <input
        type="text"
        onKeyDown={(event) => {
          event.preventDefault();
          alert('input clicked')
        }}
      /> 
    </div>
  );
}

export default App;
