import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeInProgressContext } from '../RecipesInProgress/RecipeInProgressProvider';
import './RecipeButtonControl.css';

// let today = new Date();
// const dd = String(today.getDate()).padStart(2, '0');
// const mm = String(today.getMonth() + 1).padStart(2, '0');
// const yyyy = today.getFullYear();
// today = `${dd} / ${mm} / ${yyyy}`;

// const startingRecipe = (recipeObj) => {
//   const { id, type, name, area, category, alcoholic = '', img } = recipeObj;
//   let { tags = '' } = recipeObj;

//   if (tags !== null && tags.includes(',')) tags = tags.split(',');

//   const doneRecipes = {
//     id, type, area, category, alcoholicOrNot: alcoholic, name, image: img, doneData: today, tags,
//   };
//   const startedRecipe = JSON.parse(localStorage.getItem('doneRecipes'));
//   if (!startedRecipe) return localStorage.setItem('doneRecipes', JSON.stringify([doneRecipes]));
//   return localStorage.setItem('doneRecipes', JSON.stringify([...startedRecipe, doneRecipes]));
// };

const RecipeButtonControl = () => {
  const { recipeData } = useContext(RecipeInProgressContext);
  const { id, type, englishType } = recipeData;

  console.log(recipeData)
  if (
    JSON.parse(localStorage.getItem('doneRecipes')) &&
    JSON.parse(localStorage.getItem('doneRecipes')).some((recipe) => recipe.id === id)
  ) return <div>Receita Feita!</div>
  if (
    englishType &&
    JSON.parse(localStorage.getItem('inProgressRecipes')) &&
    JSON.parse(localStorage.getItem('inProgressRecipes'))[englishType][id]
    ) {
    return (
      <div>
        <Link data-testid="start-recipe-btn" to={`/${type}/${id}/in-progress`}>
          <button type="button">
            Continuar Receita
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link className="recipe-btn" data-testid="start-recipe-btn" to={`/${type}/${id}/in-progress`}>
        <button type="button">
          Iniciar Receita
        </button>
      </Link>
    </div>
  );
};

export default RecipeButtonControl;

// RecipeButtonControl.propTypes = {
//   recipeData: PropTypes.objectOf(PropTypes.any).isRequired,
// };

// RecipeButtonControl.defaultProps = {

// };
