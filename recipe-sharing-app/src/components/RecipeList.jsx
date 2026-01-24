import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    // Pull necessary state from store
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    // Re-run filter if the main recipe list changes (e.g., after adding/deleting)
    useEffect(() => {
        filterRecipes();
    }, [recipes, filterRecipes]);

    // Determine which list to display
    const displayRecipes = searchTerm ? filteredRecipes : recipes;

    return (
        <div>
            <h2>Recipes</h2>
            {displayRecipes.length === 0 ? <p>No recipes found.</p> : null}
            {displayRecipes.map(recipe => (
                <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <Link to={`/recipe/${recipe.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;