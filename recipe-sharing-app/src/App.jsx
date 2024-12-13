import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing Application</h1>
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
        <FavoritesList />
        <RecommendationsList />
      </div>
    </Router>
  );
};

export default App;
