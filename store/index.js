export const state = () => ({
    recipes: [],
});

export const mutations = {
    addRecipe (state, recipe) {
        state.recipes.push(recipe);
    },
    
};