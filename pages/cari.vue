<template>
    <div class="py-4">
      <div class="container">
        <div class="title border-bottom">
          <h5>Cari Resep</h5>
        </div>
        <div class="search-bar">
          <input v-model="searchQuery" type="text" placeholder="Cari..." @input="performSearch">
          <button @click="performSearch">Cari</button>
        </div>
        <div class="list-task">
          <!-- Melooping resep yang telah difilter (berdasarkan searchQuery) -->
          <div v-for="recipe in filteredRecipes" :key="recipe.id" class="item-task d-flex align-items-center border-bottom pt-3 pb-4">
            <div class="title-task">{{ recipe.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '', // Menyimpan kata kunci pencarian pengguna
        recipes: [
        ],
      };
    },
    computed: {
      filteredRecipes() {
        if (this.selectedCategory === 'all') {
          return this.$store.state.recipes; // Mengambil data resep dari Vuex store
        } else {
          return this.$store.state.recipes.filter(recipe => recipe.category === this.selectedCategory);
        }
      },
    },
    methods: {
      performSearch() {
      },
    },
  };
  </script>
  
  <style>
  
  </style>
  