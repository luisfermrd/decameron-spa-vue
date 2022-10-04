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
                            <h1 class="fs-3">{{this.hotel.name}}</h1>
                            <h9>Numero de habitaciones: {{this.hotel.num_rooms}}</h9>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-end align-items-center">
                        <button @click="viewFormHabitacionCreate(this.hotel.id)" type="button" class="btn btn-success">
                            <i class="bi bi-plus-lg"></i> Crear habitación
                        </button>
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
                            <tr class="" v-for="habitacion in habitaciones" :key="habitacion.id">
                                <td scope="row">{{habitacion.type.name}}</td>
                                <td >{{habitacion.accommodation.name}}</td>
                                <td >{{habitacion.quantity}}</td>
                                <td class="d-flex justify-content-center">
                                    <button @click="editRoom(habitacion.id)" type="button" class="btn btn-warning rounded-5 text-light me-3">
                                        Editar
                                    </button>
                                    <button @click="destroyRoom(habitacion.id)" type="button" class="btn btn-danger rounded-5">
                                        Eliminar
                                    </button>
                                </td>
                                <td></td>
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
        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.id)
        .then(response => (this.hotel = response.data.data))

        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.id)
        .then(response => (this.habitaciones = response.data.data))
    },
    data() {
        return {
            hotel: [],
            habitaciones: [],
            info: null,
            errores: {},
            success: false
        }
    },
    methods: {
        viewFormHabitacionCreate(id) {
            this.$router.push({ name: 'HabCreatePage',
            params: id })
        },
        editRoom(id) {
            this.$router.push({ name: 'HabEditarPage',
            params: id })
        },
        destroyRoom(id) {
            this.errores = {}
            if (confirm('¿Esta seguro que desea eliminar este habitacion?')) {
                axios({
                    method: 'delete',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+id,
                    responseType: 'json', 
                }) 
                .then(response => {  
                    this.success = response.data.success
                    axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.id)
                            .then(response => (this.habitaciones = response.data.data))
                })
                .catch(error => {
                    this.errores = error.response.data.errors
                    this.info = null
                    this.success = false
                })       
            }
        },
    }
}
</script>