import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '', 
  filteredRecipes: [], 

  
  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase()) // Additional filtering by description (optional)
    ),
  })),

  
  setRecipes: (recipes) => set((state) => {
    set({ recipes });
    set({ filteredRecipes: recipes });
  }),
}));

export { useRecipeStore };
