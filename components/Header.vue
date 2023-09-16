<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">Kooky</router-link>
            
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNav" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <!-- Mengatur tautan ke halaman Beranda -->
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- Mengatur tautan ke halaman Cari -->
                        <router-link to="/cari" class="nav-link">Search</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- Mengatur tautan ke halaman Tambah -->
                        <router-link to="/tambah" class="nav-link">Share</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- Mengatur tautan ke halaman Profil -->
                        <router-link to="/profil" class="nav-link">Profile</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: #abb9ac;
}

.navbar-brand {
    font-size: 24px;
    color: #15323f;
}

.nav-link {
    color: #15323f !important;
    margin-left: 20px;
    font-size: 18px;
}

.nav-link:hover {
    color: #117e81 !important;
}
</style>