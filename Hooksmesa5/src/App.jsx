
import './App.css'
import Articulo from './Articulo'
import { useState } from 'react';


function App() {

  const [ producto , setProducto ] = useState('');

  return (
    <>

      <Articulo producto={producto} setProducto={setProducto} />

    </>
  );
}

export default App
