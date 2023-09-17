<template>
    <div class="py-4">
        <div class="container">
            <div class="title border-bottom">
                <h5>Add New Recipe</h5>
            </div>
            <form @submit.prevent="addRecipe">
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input  id="title" v-model="newRecipe.title" type="text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="ingredients">Ingredients:</label>
                    <textarea id="ingredients" v-model="newRecipe.ingredients" class="form-control" required></textarea>
                </div>
                <div class="form-group">
                    <label for="instructions">Instructions:</label>
                    <textarea id="instructions" v-model="newRecipe.instructions" class="form-control" required></textarea>
                </div>
                <div class="form-group">
                    <label for="category">Category:</label>
                    <select id="category" v-model="newRecipe.category" class="form-control">
                        <option value="makanan">Makanan</option>
                        <option value="minuman">Minuman</option>
                        <option value="kue">Kue</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Add Recipe</button>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Tambah',
    data() {
        return {
            newRecipe: {
                title: '',
                ingredients: '',
                instructions: '',
                category: 'makanan', // Default category
            },
            recipes: [],
        };
    },
    methods: {
        addRecipe() {
            this.recipes.push(this.newRecipe);
            this.newRecipe = {
                title: '',
                ingredients: '',
                instructions: '',
                category: 'makanan',
            };
        },
    },
};
</script>
  