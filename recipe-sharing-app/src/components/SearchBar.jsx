import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term in the store
    filterRecipes(); // Trigger the filtering action
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;