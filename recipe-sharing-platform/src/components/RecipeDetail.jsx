import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 shadow-md">{recipe.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="shadow-lg">
          <img src={recipe.image} alt={recipe.title} className="w-full h-72 object-cover rounded-lg mb-4" />
        </div>
        <div className="shadow-lg p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-5 mb-6">
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>
          <ol className="list-decimal pl-5">
            {recipe.instructions && recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
