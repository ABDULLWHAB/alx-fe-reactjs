import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (ingredients.split('\n').length < 2) newErrors.ingredients = 'Please add at least two ingredients';
    if (!instructions) newErrors.instructions = 'Instructions are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),
      instructions: instructions.split('\n'),
    };
    console.log('New Recipe:', newRecipe);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.title && <p className="text-red-500">{errors.title}</p>}
        <div>
          <label htmlFor="title" className="block text-lg font-medium">Recipe Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>
        
        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
        <div>
          <label htmlFor="ingredients" className="block text-lg font-medium">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Enter ingredients (one per line)"
          />
        </div>

        {errors.instructions && <p className="text-red-500">{errors.instructions}</p>}
        <div>
          <label htmlFor="instructions" className="block text-lg font-medium">Instructions</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Enter preparation steps"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;

