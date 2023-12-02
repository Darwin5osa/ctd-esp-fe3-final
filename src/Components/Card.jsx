import { Link } from "react-router-dom";
import { useDentistStates } from '../Components/utils/global.context'

const Card = ({ dentist }) => {
  const {state, dispatch} = useDentistStates()
  const isDentistInFavorites = state.favs.some(fav => fav.id == dentist.id)

  const handleFavoriteDentist = () => {
    isDentistInFavorites
      ? dispatch({ type: "DELETE_FAV", payload: dentist })
      : dispatch({ type: "ADD_FAV", payload: dentist });

    localStorage.setItem('favs', JSON.stringify(state.favs));
  };

  return (
    <div className="card">
      <Link to={"/detail/" + dentist.id}>
        <h2>{dentist.name}</h2>
      </Link>
      <h4>
        {dentist.username} - ID: {dentist.id}
      </h4>
        <button onClick={handleFavoriteDentist} className="favButton">
          {isDentistInFavorites
            ? 'Remove fav ❌'
            : 'Add fav ⭐'}
        </button>
    </div>
  );
};

export default Card;