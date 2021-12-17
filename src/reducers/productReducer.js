import types from "../types";

const initialProductState = {
  products: [
    { id: 1, title: "Celular Xiaomi" },
    { id: 2, title: "Tablet Samsung" },
  ],
  cart: [
    {
      id: 1,
      title: "Celular Xiaomi",
      quantity: 1,
    },
  ],
  activeProduct: { id: 2, title: "Product #2" },
};
 


const productReducer = (state, action) => {

    switch (action.type) {
        case types.productShow:
            return {
            ...state,
            activeProduct: action.payload,
            };
        break; //* Fin case
        case types.productAddToCar:
            {
                const newProduct = action.payload;

                const cartContainProduct = state.cart.find(
                    (product) => product.id === newProduct.id
                );

                return cartContainProduct
                    ? {
                        ...state,
                        cart: state.cart.map((product) =>product.id === newProduct.id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                        ),
                    }
                    : {
                        ...state,
                        cart: [...state.cart, { ...action.payload, quantity: 1 }],
                    };
            }
        break; //* Fin case
        case types.productRemoveFromCar:
            return {
            ...state,
            cart: state.cart.filter((product) => product.id !== action.payload),
            };
        break; //* Fin case
        case types.productRemoveOneFromCar:{
                const productDelete = state.cart.find(product => product.id === action.payload);

                return productDelete.quantity > 1
                ? {
                        ...state,
                        cart: state.cart.map((product) =>
                            product.id === action.payload
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                        ),
                    }
                : {
                    ...state,
                    cart: state.cart.filter(product => product.id !== action.payload)
                }
        }
        break;
        default:
            return state;
        break;
    }

    
} //* Fin de función productReducer()

export { initialProductState };
export default productReducer
