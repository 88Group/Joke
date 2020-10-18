import React from 'react';
import {useState, useEffect} from 'react';

const API_URL =  'https://api.chucknorris.io/jokes/random?category=money';

function App() {

  const [joke, setJoke] = useState('');

  const generateJoke = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJoke();
  }, [])

  return (
    <div className = "box">
      <h2> Шухихои Афанди</h2>
       <p dangerouslySetInnerHTML={{__html:joke}} />
      <button onClick={generateJoke}>Наву тозаро нишон дех <span aria-label='afandi' role="img">😊</span></button>
    </div>
  );
}

export default App;
