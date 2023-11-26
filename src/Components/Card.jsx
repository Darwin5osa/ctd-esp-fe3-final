import React from "react";
import { Link } from "react-router-dom";


const Card = ({ dentist }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <Link to={'/detail/' + dentist.id}>
          <h2>{dentist.name}</h2>
        </Link>
        <h4>{dentist.username} - ID: {dentist.id}</h4>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;
