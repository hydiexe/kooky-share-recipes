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
          // Data resep Anda di sini
        ],
      };
    },
    computed: {
      filteredRecipes() {
        const query = this.searchQuery.toLowerCase();
        return this.recipes.filter(recipe => {
          return (
            recipe.title.toLowerCase().includes(query) ||
            recipe.ingredients.toLowerCase().includes(query) ||
            recipe.instructions.toLowerCase().includes(query)
          );
        });
      },
    },
    methods: {
      performSearch() {
        // Metode ini akan dipanggil saat pengguna mengklik tombol "Cari"
        // Anda juga dapat memanggilnya saat query pencarian berubah (misalnya, saat mengetik)
        // Fungsionalitas pencarian diimplementasikan dalam computed property "filteredRecipes"
      },
    },
  };
  </script>
  
  <style>
  /* Tambahkan gaya khusus untuk komponen ini jika diperlukan */
  </style>
  