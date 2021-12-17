import { useReducer } from "react";


const types = {
  increment: "increment",
  decrement: "decrement",
  reset: "reset",
};

//const initialState = 10.25;
const initialState = 10;
const init = (value) => {
    //return parseInt(value); // en caso de que se a un numero con decimales
    return value;
}

const reducer = (state, action) => {

    switch (action.type) {
        case types.increment:
            return state + 1;  
        break;
        case types.decrement:
            return state - 1;
        break;
        case types.reset :
            return init(initialState);
        break;
        default:
            return state;
        break;
    }
}   

const CounterApp = () => {

    const [counter, dispatch] = useReducer(reducer, initialState, init);



    return (
      <div>
        <h1>Clicks: {counter}</h1>
        <button onClick={() => dispatch({ type: types.increment })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: types.decrement })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: types.reset })}>Reset</button>
      </div>
    );
}

export default CounterApp
