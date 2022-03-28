import { useReducer } from "react"

const initiaState = {
  contador: 0,
}

type ActionType = 
 | {type: 'incrementar'}
 | {type: 'decrementar'}
 | {type: 'custtom' , payload: number}


const contadorRedu = (state: typeof initiaState, action: ActionType) => {
  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1
      }

    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1 
      }

      case 'custtom':
        return {
          ...state,
          contador: action.payload
        }

    default:
      return state;
  }
}

export const ContadorReducer = () => {
  const [{contador}, dispatch] = useReducer(contadorRedu, initiaState)

  return (
    <div>
      <h3>Counter: {contador}</h3>

      <button className="btn btn-outline-primary"
        onClick={() => dispatch({ type: 'incrementar' })}
      >
        +1
      </button>

      <button className="btn btn-outline-primary"
        onClick={() => dispatch({ type: 'decrementar' })}
      >
        -1
      </button>

      <button className="btn btn-outline-primary"
        onClick={() => dispatch({ type: 'custtom' , payload:100 })}
      >
        100
      </button>

    </div>
  )
}
