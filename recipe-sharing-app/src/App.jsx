import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper'; // A simple wrapper to get ID from URL

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Manager</h1>
        <Routes>
          <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
