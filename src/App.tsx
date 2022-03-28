import { ContadorReducer } from "./components/ContadorReducer";
import { Counter } from "./components/Counter";
import { FormularioCustomHooks } from "./components/Formulario2";
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
      <hr />
      <h2>customHooks</h2>
      <FormularioCustomHooks />

      <br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
