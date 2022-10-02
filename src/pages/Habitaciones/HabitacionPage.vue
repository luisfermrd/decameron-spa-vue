<template>
    <article class="shadow p-4 mb-5 bg-body rounded">
        <div class="p-4">
            <nav class="navbar navbar-expand-lg bg-white">
                <div class="container-fluid">
                    <div class="navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-item nav-link ms-3 active" aria-current="page" href="#">
                                    <i class="bi bi-house-fill me-1"></i>Inicio
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/hoteles" class="nav-item nav-link ms-3" aria-current="page" href="#">
                                    <i class="bi bi-chevron-right me-1"></i>Hoteles
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link text-primary fw-bold  active"><i
                                        class="bi bi-chevron-right me-1"></i>Habitaciones</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div class="p-4">
                <div class="row">
                    <div class="col d-flex">
                        <i class="bi bi-bank me-2 fs-1"></i>
                        <div>
                            <h1 class="fs-3">GRAN HOTEL 2</h1>
                            <h9>Numero de habitaciones: 55</h9>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-end align-items-center">
                        <button @click="viewFormHabitacionCreate" type="button" class="btn btn-success"><i
                                class="bi bi-plus-lg"></i>
                            Crear habitación</button>
                    </div>
                </div>
                <div class="table-responsive mt-3">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">TIPO</th>
                                <th scope="col">ACOMODACIÓN </th>
                                <th scope="col">CANTIDAD</th>
                                <th scope="col" class="text-center">OPCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td scope="row">JUNIOR</td>
                                <td>TRIPLE</td>
                                <td>10</td>
                                <td class="d-flex justify-content-center">
                                    <router-link to="/habitacionesEditar" class="btn btn-warning rounded-5 text-light me-3"
                                        aria-current="page" href="#">Editar</router-link>
                                    <button type="button" class="btn btn-danger rounded-5">Eliminar</button>
                                </td>
                                <td></td>
                            </tr>
                            <tr class="">
                                <td scope="row">ESTANDAR</td>
                                <td>SENCILLA</td>
                                <td>20</td>
                                <td class="d-flex justify-content-center">
                                    <router-link to="/habitacionesEditar" class="btn btn-warning rounded-5 text-light me-3"
                                        aria-current="page" href="#">Editar</router-link>
                                    <button type="button" class="btn btn-danger rounded-5">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
import axios from 'axios'

export default {
    beforeMount() {
        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels').then(response => (this.hoteles = response.data.data))
    },
    data() {
        return {
            hoteles: []
        }
    },
    methods: {
        viewFormHabitacionCreate() {
            this.$router.push({ name: 'HabCreatePage' })
        }
    }
}
</script>