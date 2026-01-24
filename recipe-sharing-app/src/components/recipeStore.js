import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  // Action to add a new recipe to the array
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  // Action to replace the entire recipes array
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
