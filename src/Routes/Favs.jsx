import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [dentistList, setDentistList] = useState([]);

  useEffect(() => {
    const updateDentistList = () => {
      const favoritesListString = localStorage.getItem('favs');
      const favoritesList = favoritesListString ? JSON.parse(favoritesListString) : [];
      setDentistList([...favoritesList]);
    };

    window.addEventListener('favoritesChanged', updateDentistList);

    updateDentistList();

    return () => {
      window.removeEventListener('favoritesChanged', updateDentistList);
    };
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dentistList.map((dentist) => (
          <Card dentist={dentist} key={dentist.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;