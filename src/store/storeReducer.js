
const types = {
    authLogin:'auth - login',
    authLogout: 'auth - logout',
    productDeleteAll:'producto - eliminar todo',
    productChange:'producto - cambio'
}

const initialStore = {
  user: { id: 1, name: "Fredys" },
  products: [
    { id: 1, title: "Producto 1" },
    { id: 2, title: "Producto 1" },
  ],
};

const storeReducer = (state, action) => {

    switch (action.type) {
      case types.authLogout:
        return {
          ...state,
          user: null,
        };
        break;
      case types.authLogin:
        return {
          ...state,
          user: action.payload,
        };
        break;
      case types.productDeleteAll:
        return {
          ...state,
          products: [],
        };
        break;
      case types.productChange:
          return {
              ...state,
              products: [{id:3, title: "Producto #3"}]
          }
        break;
      default:
        return state;
        break;
    }
}

export { initialStore, types };
export default storeReducer;