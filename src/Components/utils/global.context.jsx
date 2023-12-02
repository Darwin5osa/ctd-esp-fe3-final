import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

const initialState = { 
  theme: false, 
  dentistList: [], 
  dentistSelected: 0,
  favs: JSON.parse(localStorage.getItem('favs')) || [] 
};

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(url).then((response) =>
      dispatch({ type: "GET_DENTISTS", payload: response.data })
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useDentistStates = () => useContext(ContextGlobal);