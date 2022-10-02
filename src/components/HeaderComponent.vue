<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a href="#" class="navbar-brand ms-5">
                <img src="@/assets/logo.png" width="150" alt="DECAMERON">
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link ms-3 active" aria-current="page" href="#">Inicio
                    </router-link>
                    <router-link to="/hoteles" class="nav-item nav-link ms-3" aria-current="page" href="#">Hoteles
                    </router-link>
                    <router-link to="/habitacionesTipo" class="nav-item nav-link ms-3" aria-current="page" href="#">
                        Tipos de habitaciones</router-link>
                    <router-link to="/acomodaciones" class="nav-item nav-link ms-3" aria-current="page" href="#">
                        Acomodaciones</router-link>
                </div>
            </div>
        </div>
    </nav>
    <div class="shadow-sm p-4 mb-5 bg-body rounded">
        <div class="container ms-4">
            <span>Panel de Administración</span>
        </div>
    </div>
</template>