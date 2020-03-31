import React from 'react';
//import React, { useState } from 'react';

/** css global */
import './global.css';

//import Header from './Header';
//import Logon from "./pages/Logon";

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
  
  
  
  //const [counter, setCounter] = useState(0);  //retorna array [valor, funcaoDeAtualizacao]
  /*function increment(){
    setCounter(counter + 1);
  }*/
  /*return (
    <div>
      <Header> Contador: {counter} </Header>
      <button onClick={increment}>Incrementar</button>
    </div>    
  );
  */
}

export default App;
