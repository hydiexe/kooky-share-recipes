<template>
  <div class="py-4">
    <div class="container">

      <div class="title border-bottom">
        <h5>Kooky, an international kitchen</h5>
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
  import { mapState } from 'vuex';

  export default {
    name: 'Beranda',

    data() {
      return {
        selectedCategory: 'all', 
      };
    },

    computed: {
    ...mapState(['recipes']),

      filteredRecipes() {
        if (this.selectedCategory === 'all') {
          return this.recipes; // Mengambil data resep dari Vuex store
        } else {
          return this.recipes.filter(recipe => recipe.category === this.selectedCategory);
        }
      },
    },
  };
</script>

<style></style>
