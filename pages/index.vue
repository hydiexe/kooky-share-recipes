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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Beranda'
}
</script>

<style></style>
