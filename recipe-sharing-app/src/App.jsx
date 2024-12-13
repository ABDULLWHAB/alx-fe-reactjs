import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing Application</h1>
      
      {/* Add a form to add a new recipe */}
      <AddRecipeForm />
      
      {/* List the recipes */}
      <RecipeList />
    </div>
  );
}

export default App;
