import React from "react";
import { ContainerFavorites } from "../../assets/styles/StyleCardFavorite";
import {
  ButtonFavorites,
  ButtonHeartFav,
} from "../../assets/styles/StyleButtons";
import HeartBlack from "../../assets/img/icon-heart-black.png";
import HeartRed from "../../assets/img/icon-heart-red.png";

const FavoriteMeals = ({
  favorites,
  modal,
  toggleFav,
  setToggleFav,
  favoriteMeals,
  deleteFavorite,
}) => {
  const CardsFavorites = (favorite) => {
    console.log(favorites);
    let shortNmeMeal = Array.from(favorite.strMeal).slice(0, 38);

    const heart = favorites?.find(
      (mealId) => mealId.idMeal === favorite.idMeal
    );

    return (
      <figure>
        <img
          className="figure__meal"
          src={favorite.strMealThumb}
          alt={favorite.strMeal}
          onClick={() => modal(favorite.idMeal)}
        />
        <figcaption>{shortNmeMeal}</figcaption>
        <div className="card__footer">
          <ButtonHeartFav
            className={`card__btn--favorite ${heart ? "hide" : "show"} `}
            onClick={() => favoriteMeals(favorite)}>
            {!heart && <img src={HeartBlack} alt="icon-heart-black" />}
          </ButtonHeartFav>

          <ButtonHeartFav
            className={`card__btn--delete ${!heart ? "hide" : "show"} `}
            onClick={() => deleteFavorite(favorite.idMeal)}>
            <img src={HeartRed} alt="icon-heart-red" />
          </ButtonHeartFav>
        </div>
      </figure>
    );
  };

  const titleMealsFav = toggleFav
    ? "Hide Meals Favorites"
    : "Show Meals Favorites";

  return (
    <>
      {favorites.length > 0 && (
        <ContainerFavorites>
          <ButtonFavorites onClick={() => setToggleFav(!toggleFav)}>
            {titleMealsFav} <span> {favorites.length} </span>
          </ButtonFavorites>

          {toggleFav && (
            <div className="container__cards--favorites">
              {favorites.map((favorite) => (
                <CardsFavorites key={favorite.idMeal} {...favorite} />
              ))}
            </div>
          )}
        </ContainerFavorites>
      )}
    </>
  );
};

export default FavoriteMeals;
