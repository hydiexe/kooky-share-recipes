<template>
  <div class="py-4">
    <div class="container">

      <div class="title border-bottom">
        <h5>Kooky, an international kitchen</h5>
      </div>

      <div class="list-task">
        <!-- Daftar resep -->
        <div class="item-task d-flex align-items-center border-bottom pt-3 pb-4">
          <div class="title-task">Resep 1</div>
        </div>
        <div class="item-task d-flex align-items-center border-bottom pt-3 pb-4">
          <div class="title-task">Resep 2</div>
        </div>
        <!-- etc -->
      </div>

      <div class="action py-2">
        <router-link to="/tambah" class="add-button">Add Recipe</router-link>
      </div>

      <div class="filter-bar">
        <label for="category">Filter by Category:</label>
        <select id="category" v-model="selectedCategory">
          <option value="all">All</option>
          <option value="makanan">Makanan</option>
          <option value="minuman">Minuman</option>
          <option value="kue">Kue</option>
        </select>
      </div>
      
      <div class="list-task">
        <!-- Loop through filtered recipes -->
        <div v-for="recipe in filteredRecipes" :key="recipe.id" class="item-task d-flex align-items-center border-bottom pt-3 pb-4">
          <div class="title-task">{{ recipe.title }}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Beranda',
  data() {
  return {
    recipes: [
      { id: 1, title: 'Resep 1', category: 'makanan' },
      { id: 2, title: 'Resep 2', category: 'minuman' },
      { id: 3, title: 'Resep 3', category: 'kue' },
      // add more
    ],
    selectedCategory: 'all', // Initialize selected category to 'all'
  };
},

computed: {
    filteredRecipes() {
      if (this.selectedCategory === 'all') {
        return this.recipes; // Return all recipes
      } else {
        // Filter recipes based on the selected category
        return this.recipes.filter(recipe => recipe.category === this.selectedCategory);
      }
    },
  },
  // ... (other component options)
};
</script>

<style></style>
