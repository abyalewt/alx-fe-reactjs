import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Recipe Manager</h1>

        <Routes>
          {/* Main Route: Home page showing Search, Form, and List */}
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <hr style={{ margin: '20px 0' }} />
                <RecipeList />
              </>
            }
          />

          {/* Details Route: Shows individual recipe info */}
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;