import Imagen from './rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './Components/Characters';


function App() {
  
  const [characters, setCharacters]=useState(null);

  const reqApi= async()=>{
    const api=await fetch('https://rickandmortyapi.com/api/character');
    const characterApi=await api.json();
    setCharacters(characterApi.results);
  };
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Ricky & Morty</h1>
        
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ):(
          <>
             <img src={Imagen} alt="Rick & Morty" className="img-home"/>
             <div>
              <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
            </div>
          </>
        )}
       
      </header>
    </div>
  );
}

export default App;
