import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useDentistStates } from '../Components/utils/global.context'

const Favs = () => {
  const [dentistList, setDentistList] = useState([]);
  const {state} = useDentistStates()

  useEffect(() => {
      const favoritesListString = localStorage.getItem('favs');
      const favoritesList = favoritesListString ? JSON.parse(favoritesListString) : [];
      setDentistList([...favoritesList]);
  }, [state.favs]);

  return (
    <>
      <div className="favs">
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {dentistList.map((dentist) => (
            <Card dentist={dentist} key={dentist.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favs;