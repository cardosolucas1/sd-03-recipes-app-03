const url_12drinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const fetchDrinks = (quantity) => {
  return fetch(`${url_12drinks}${quantity}`)
    .then((response) => response.json())
    .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
};

const urlCategoriesDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
export const fetchCategoriesDrinks = () => {
  return fetch(urlCategoriesDrinks)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlCategoryDrinksButton = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
export const fetchDrinkByCategory = (category) => {
  return fetch(`${urlCategoryDrinksButton}${category}`)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlDrinkById = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export const fetchDrinkById = (id) => {
  return fetch(`${urlDrinkById}${id}`)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlRandomDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
export const fetchRandomDrink = () => {
  return fetch(urlRandomDrink)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlListDrinksIngredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
export const fetchDrinksByCategory = () => {
  return fetch(urlListDrinksIngredients)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlFindDrinkByIngredients = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
export const fetchMealsByCategory = (ingredient) => {
  return fetch(`${urlFindDrinkByIngredients}${ingredient}`)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}

const urlFindDrinksByName = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const fetchMealsByName = (name) => {
  return fetch(`${urlFindDrinksByName}${name}`)
  .then((response) => response.json())
  .then((json) => Promise.ok ? Promise.resolve(json) : Promise.reject(json));
}
