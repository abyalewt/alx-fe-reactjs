import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) =>
        set((state) => ({ recipes: [...state.recipes, newRecipe] })),

    // Action to delete a recipe by ID
    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),

    // Action to update an existing recipe
    updateRecipe: (id, updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe,
            ),
        })),

    setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
