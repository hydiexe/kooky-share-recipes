<template>
    <div class="py-4">
        <div class="container">
            <div class="title border-bottom">
                <h5>Search Recipes</h5>
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Search...">
                <button>Search</button>
            </div>
            <div class="list-task">
                <!-- Loop through filtered recipes (based on searchQuery) -->
                <div v-for="recipe in filteredRecipes" :key="recipe.id" class="item-task d-flex align-items-center border-bottom pt-3 pb-4">
                    <div class="title-task">{{ recipe.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Cari',
    data() {
    return {
        searchQuery: '', // Store user's search query
        recipes: [  // Initialize the recipes array
            { id: 1, title: 'Recipe 1', ingredients: '...', instructions: '...', category: 'makanan' },
            { id: 2, title: 'Recipe 2', ingredients: '...', instructions: '...', category: 'minuman' },
            // Add more recipes as needed
        ],
        };
    },
    computed: {
        filteredRecipes() {
        // Use this.searchQuery to filter recipes based on user's input
        const query = this.searchQuery.toLowerCase();
        return this.recipes.filter(recipe => {
            return recipe.title.toLowerCase().includes(query) ||
                recipe.ingredients.toLowerCase().includes(query) ||
                recipe.instructions.toLowerCase().includes(query);
        });
        },
    },
    methods: {
        performSearch() {
        // This method will be called when the user clicks the "Search" button
        // You can also call it when the search query changes (e.g., when typing)
        // Implement any additional logic you need for searching
        },
    },
};
</script>
  