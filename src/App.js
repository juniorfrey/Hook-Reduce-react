//import CounterApp from "./CounterApp";
//import ProductApp from "./ProductApp";
//import TodoApp from "./TodoApp";

import MyComponent from "./components/MyComponent";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <div>
      {/*<CounterApp />*/}
      {/*<TodoApp />*/}
      {/*<ProductApp />*/}

      <h1>---- Estado global ------</h1>
      <StoreProvider>
          <MyComponent />
      </StoreProvider>
    </div>
  );
}

export default App;
