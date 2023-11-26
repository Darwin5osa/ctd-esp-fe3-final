import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritesListString = localStorage.getItem('favs');
    const favoritesList = favoritesListString ? JSON.parse(favoritesListString) : [];
    const isDentistInFavorites = favoritesList.some((favDentist) => favDentist.id === dentist.id);
    setIsFavorite(isDentistInFavorites);
  }, [dentist.id]);

  const handleFavoriteDentist = () => {
    const favoritesListString = localStorage.getItem('favs');
    const favoritesList = favoritesListString ? JSON.parse(favoritesListString) : [];

    const isDentistInFavorites = favoritesList.some((favDentist) => favDentist.id === dentist.id);

    const updatedFavoritesList = isDentistInFavorites
      ? favoritesList.filter((favDentist) => favDentist.id !== dentist.id)
      : [...favoritesList, dentist];

    localStorage.setItem('favs', JSON.stringify(updatedFavoritesList));
    setIsFavorite(!isDentistInFavorites);
  };

  return (
    <div className="card">
        <Link to={'/detail/' + dentist.id}>
          <h2>{dentist.name}</h2>
        </Link>
        <h4>{dentist.username} - ID: {dentist.id}</h4>

        <button onClick={handleFavoriteDentist} className="favButton">
          {isFavorite
            ? 'Remove fav ❌'
            : 'Add fav ⭐'}
        </button>
    </div>
  );
};

export default Card;