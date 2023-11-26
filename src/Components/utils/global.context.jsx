import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = { theme: "light", dentistList: [], dentistSelected: {} };

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentistList: action.payload };
    case "GET_DENTIST":
      return { ...state, dentistSelected: action.payload }; //completar
    case "TURN_LIGHT_THEME":
      return { ...state, theme: "light" };
    case "TURN_DARK_THEME":
      return { ...state, theme: "dark" };
  }
};

export const ContextProvider = ({ children }) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(url).then((response) =>
      dispatch({ type: "GET_DENTISTS", payload: response.data })
    );
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useDentistStates = () => useContext(ContextGlobal);