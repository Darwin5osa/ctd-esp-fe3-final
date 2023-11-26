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

    // Suscribirse al evento personalizado 'favoritesChanged'
    window.addEventListener('favoritesChanged', updateDentistList);

    // Obtener la lista de favoritos al montar el componente
    updateDentistList();

    // Limpiar el event listener cuando el componente se desmonta
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