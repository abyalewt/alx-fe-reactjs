import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
        <h1>Recipe Manager</h1>

        <Routes>
          {/* Main Route: Home page showing Search, Form, and personalized lists */}
          <Route
            path="/"
            element={
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '30px' }}>
                {/* Left Column: Management & Search */}
                <main>
                  <SearchBar />
                  <AddRecipeForm />
                  <hr style={{ margin: '20px 0' }} />
                  <RecipeList />
                </main>

                {/* Right Column: Personalization */}
                <aside style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
                  <FavoritesList />
                  <hr style={{ margin: '20px 0' }} />
                  <RecommendationsList />
                </aside>
              </div>
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