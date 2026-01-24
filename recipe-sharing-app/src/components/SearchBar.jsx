import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        filterRecipes(); // Trigger the filter logic immediately
    };

    return (
        <div style={{ margin: '20px 0' }}>
            <input
                type="text"
                placeholder="Search recipes..."
                onChange={handleSearchChange}
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
        </div>
    );
};

export default SearchBar;