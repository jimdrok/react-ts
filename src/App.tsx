import { ContadorReducer } from "./components/ContadorReducer";
import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";


function App() {
  return (
    <div className="App">
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState:</h2>
      <Counter />
      <Usuario />
      <hr />
      <h2>useEfect + useRef + Custom Props</h2>
      <TimerPadre />
      <hr />
      <h2>useReducer:</h2>
      <ContadorReducer />
    </div>
  );
}

export default App;
