<template>
  <div class="py-4">
    <div class="container">

      <div class="title border-bottom">
        <h5>Kooky, an international kitchen</h5>
      </div>

      <div class="search-bar">
        <input v-model="searchQuery" type="text" placeholder="Cari..." @input="performSearch">
        <button @click="performSearch">Cari</button>
      </div>

      <div class="list-task">
        <div v-for="recipe in filteredRecipes" :key="recipe.id" class="item-task d-flex align-items-center border-bottom pt-3 pb-4">
          <div class="title-task">{{ recipe.title }}</div>
        </div>
      </div>

      <div v-if="filteredRecipes.length === 0 && searched" class="no-results">
        Tidak ada hasil yang ditemukan.
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
      
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Beranda',
    computed: {
      ...mapState(['recipes']),

      filteredRecipes() {
        let filtered = this.recipes; 

        if (this.selectedCategory !== 'all') {
          filtered = filtered.filter(recipe => recipe.category === this.selectedCategory);
        }

        if (this.searched) {
          const query = this.searchQuery.toLowerCase().trim();
          filtered = filtered.filter(recipe => 
            recipe.title.toLowerCase().includes(query) ||
            recipe.ingredients.toLowerCase().includes(query) ||
            recipe.instructions.toLowerCase().includes(query)
          );
        }

        return filtered;
      },
    },

    // eslint-disable-next-line vue/order-in-components
    data() {
      return {
        selectedCategory: 'all',
        searchQuery: '', 
        searched: false,
      };
    },

    methods: {
      updateSearchQuery() {
        this.searched = false;
      },

      performSearch() {
        this.searched = true;
      },
    },
  };
</script>

<style>
.no-results {
  margin-top: 10px;
  color: red;
  font-weight: bold;
}
</style>
