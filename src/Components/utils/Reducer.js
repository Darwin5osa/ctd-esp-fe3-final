export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DENTISTS":
        return { ...state, dentistList: action.payload };
      case "GET_DENTIST":
        return { ...state, dentistSelected: action.payload };
      case "CHANGE_THEME":
        return {...state, theme: !state.theme };
      case "ADD_FAV":
        return {...state, favs: [...state.favs, action.payload]};
      case "DELETE_FAV":
        return {...state, favs: state.favs.filter((favDentist) => favDentist.id !== action.payload.id)};
      default:
        return alert("Metodo no existe")
    }
  };