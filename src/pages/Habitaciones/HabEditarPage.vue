<template>
    <article class="shadow p-4 mb-5 bg-body rounded">
        <div class="p-4">
            <nav class="navbar navbar-expand-lg bg-white">
                <div class="container-fluid">
                    <div class="navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-item nav-link ms-3 active" aria-current="page" href="#">
                                    <i class="bi bi-house-fill me-1"></i> Inicio
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/hoteles" class="nav-item nav-link ms-3" aria-current="page" href="#">
                                    <i class="bi bi-chevron-right me-1"></i> Hoteles
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a @click="regresar(this.$route.params.id)" class="nav-item nav-link ms-3" 
                                    href="#">
                                    <i class="bi bi-chevron-right me-1"></i> Hotel
                                </a>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link text-primary fw-bold  active"><i
                                        class="bi bi-chevron-right me-1"></i> Actualizar habitación</p>
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
                </div>
                <div class="container mt-3">
                    <form class="row" method="POST" id="formulario" enctype="multipart/form-data">
                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-2">
                            <label for="" class="form-label">Tipo de habitación</label>
                            <select name="gender" id="gender" class="form-control select-picker">
                                <option value="" hidden></option>
                                <option value="1" selected>JUNIOR</option>
                                <option value="2">ESTANDAR</option>
                                <option value="4">SUITE</option>
                            </select>
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-2">
                            <label for="" class="form-label">Tipo de habitación</label>
                            <select v-model="habitacion.type.name" id="acomodation" class="form-control select-picker">
                                <option v-for="tipoHab in tipoHabitaciones" :value="tipoHab.id" :key="tipoHab.id">
                                    {{ tipoHab.name }}
                                </option>
                            </select>
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-2">
                            <label for="" class="form-label">Acomodación</label>
                            <select v-model="habitacion.accommodation.name" id="acomodation" class="form-control select-picker">
                                <option v-for="acomodaciones in acomodaciones" :value="acomodaciones.id" :key="acomodaciones.id">
                                    {{ acomodaciones.name }}
                                </option>
                            </select>
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-2">
                            <div class="mb-3">
                                <label for="" class="form-label">Cantidad</label>
                                <input type="number" name="cantidad" id="cantidad" class="form-control" v-model="habitacion.quantity">
                            </div>
                        </div>

                        <div class="form-group d-flex justify-content-between">
                            <button type="submit" id="btn_save" class="btn btn-success row-3 mt-2"><i
                                    class="bi bi-arrow-clockwise"></i> Actualizar</button>
                            <button @click="regresar(this.$route.params.id)"  class="btn btn-danger row-3 mt-2" >
                                <i class="bi bi-x-circle"></i> Regresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    import axios from 'axios'
    
    export default {
        beforeMount() {
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.id)
            .then(response => (this.habitacion = response.data.data))

            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types').then(response => (this.acomodaciones = response.data))
            
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types').then(response => (this.tipoHabitaciones = response.data))
        },
        data() {
            return {
                habitacion: [],
                info: null,
                errores: {},
                success: false,
                acomodaciones: [],
                tipoHabitaciones: []
            }
        },
        methods: {
            regresar(id) {
                this.$router.push({ name: 'HabitacionPage',
                params: id })
            },
            destroyRoom(id) {
                this.errores = {}
                if (confirm('¿Esta seguro que desea eliminar este hotel?')) {
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