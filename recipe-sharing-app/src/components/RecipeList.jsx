import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import the SearchBar component

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes); // Get filtered recipes

  return (
    <div>
      <h2>Recipe List</h2>
      <SearchBar /> {/* Include the search bar */}
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

