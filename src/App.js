import './App.css';

import React, { useEffect, useState } from 'react';

function App() {
  const [textInput, setTextInput] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  useEffect(() => {
    if (textInput.length > 0) {
      setShowKeyboard(true);
    } else {
      setShowKeyboard(false);
    }
  }, [textInput]);

  const renderKeyboard = () => {
    // Note that this is not at all optimized and gets rendered multiple times.
    // Purely conceptual use currently.
    console.log('letters: ', letters);
    return letters.map((letter) => (
      <div
        style={{border: '1px solid', padding: '10px', margin: '10px 25px'}}
        onClick={() => {
          console.log('pressed ', letter);
          
          setTextInput(textInput + letter);
        }}>
          {letter}
      </div>  
    ))
  };

  return (
    <div className="App">
      <header className="App-headerCHANGE">
        <p>
          Touch Keyboard - Custom Test
        </p>
        <div>
          Demo of a possible custom virtual keyboard that prevents the default keyboard from appearing when an input is clicked.<br/>
          Hides when there are no characters.
        </div>
        
      </header>

      <p>Input to click on:</p>
      <input
        type="text"
        readOnly // prevents the default keyboard from inputing text
        onClick={(event) => {
          console.log('onClick Event', event);
          setShowKeyboard(true);
        }}
        value={textInput}
      /> 

      <div style={{marginTop: '25px'}}>
        <p>Custom keyboard:</p>  
        <div id="keyboardWrapper" style={{display: showKeyboard ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', border: '1px solid'}}>
          
          {renderKeyboard()}
          
          <p
            onClick={() => {
              setTextInput(textInput.slice(0, textInput.length - 1));
            }}>
              Backspace
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
