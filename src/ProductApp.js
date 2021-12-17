import { useReducer } from "react";
import productReducer, { initialProductState } from "./reducers/productReducer";
import types from "./types";

const ProductApp = () => {

    const [productState, dispatch] = useReducer(productReducer, initialProductState);
    const { products, cart, activeProduct } = productState;

    return (
      <div>
        <h1>Productos</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title}
              <button
                onClick={() =>
                  dispatch({
                    type: types.productShow,
                    payload: product,
                  })
                }
              >
                Ver
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: types.productAddToCar,
                    payload: product,
                  })
                }
              >
                Añadir al carrito
              </button>
            </li>
          ))}
        </ul>

        <h1>Carrito</h1>
        <ul>
          {cart.map((cart) => (
            <li key={cart.id}>
              {cart.title} - Cantidad: {cart.quantity}
              <button
                onClick={() =>
                  dispatch({
                    type: types.productRemoveOneFromCar,
                    payload: cart.id,
                  })
                }
              >
                Eliminar uno
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: types.productRemoveFromCar,
                    payload: cart.id,
                  })
                }
              >
                Eliminar del carrito
              </button>
            </li>
          ))}
        </ul>

        <h1>Vista previa</h1>
        <p>{activeProduct.title}</p>
      </div>
    );
}

export default ProductApp
