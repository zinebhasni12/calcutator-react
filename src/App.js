import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((prevResult) => prevResult + Number(inputRef.current.value)); 
    console.log(inputRef.current.value); 
  }; 
 
  // Fonction pour soustraire
  function minus(e) { 
    e.preventDefault();
    setResult((prevResult) => prevResult - Number(inputRef.current.value));
  };
   
function times(e) { 
  e.preventDefault(); 
  setResult((prevResult) => prevResult * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((prevResult) => prevResult / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value='';
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0)

  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
      
        <p>Résultat : {result}</p>
       
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
       <button onClick={plus}>Additionner</button> 
        <button onClick={minus}>Soustraire</button> 
        <button onClick={times}>Multiplier</button> 
        <button onClick={divide}>Diviser</button> 
        <button onClick={resetInput}>Réinitialiser l'entrée</button> 
        <button onClick={resetResult}>Réinitialiser le résultat</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
