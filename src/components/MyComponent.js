
import { useDispacth, useStore } from '../store/StoreProvider';
import { types } from '../store/storeReducer'

const MyComponent = () => {

    //const [store, dispacth] = useContext(StoreContext);
    const { user, products } = useStore();
    const dispacth = useDispacth();
    

    return (
      <div>
        <h1>Estado globañ</h1>
        <h2>Usuario: {user?.name}</h2>
        <button
          onClick={() =>
            dispacth({
              type: types.authLogout,
            })
          }
        >
          Cerrar sessión
        </button>
        <button
          onClick={() =>
            dispacth({
              type: types.authLogin,
              payload: { id: Date.now(), name: "Fredys" },
            })
          }
        >
          Ingresar
        </button>
        <h2>Productos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
          <button
            onClick={() =>
              dispacth({
                type: types.productDeleteAll,

              })
            }
          >
            Borrar Todo
          </button>
          <button 
              onClick={() => 
                dispacth({
                  type: types.productChange
                })
              }
              >
              Cambios</button>
        </ul>
      </div>
    );
}

export default MyComponent
