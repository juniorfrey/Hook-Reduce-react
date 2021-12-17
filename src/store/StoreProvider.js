import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialStore } from "./storeReducer";

const StoreContext = createContext();

const StoreProvider = ({children}) => {

    const [state, dispatch] = useReducer(storeReducer, initialStore)
    return (
      <StoreContext.Provider value={[state, dispatch]}>
        {children}
      </StoreContext.Provider>
    );
}

const useStore = () => useContext(StoreContext)[0];
const useDispacth = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispacth };
export default StoreProvider;