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
                                        class="bi bi-chevron-right me-1"></i>Crear nuevo
                                    hotel</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="row">
                <div class="col ms-3">
                    <h1 class="fs-3"><i class="bi bi-bank me-2"></i>Crear un nuevo hotel</h1>
                </div>
                <div class="container p-4">
                    <div class="row">
                        <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                            <div class="mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input v-model="hotel.name" type="text" name="names" id="names" class="form-control">
                                <div v-if="errores.name" style="color: red;" :role="alert">{{errores.name[0]}}</div>
                            </div>
                        </div>
                        <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                            <div class="mb-3">
                                <label for="nit" class="form-label">NIT</label>
                                <input v-model="hotel.nit" type="text" name="nit" id="nit" class="form-control">
                                <div v-if="errores.name" style="color: red;" :role="alert">{{errores.nit[0]}}</div>
                            </div>
                        </div>
                        <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                            <div class="mb-3">
                                <label for="direccion" class="form-label">Dirección</label>
                                <input v-model="hotel.address" type="text" name="direccion" id="direccion"
                                    class="form-control">
                                <div v-if="errores.name" style="color: red;" :role="alert">{{errores.address[0]}}</div>
                            </div>
                        </div>
                        <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                            <div class="mb-3">
                                <label for="nhabitaciones" class="form-label">Número de habitaciones</label>
                                <input v-model="hotel.num_rooms" type="number" name="habitaciones" id="habitaciones"
                                    class="form-control">
                                <div v-if="errores.name" style="color: red;" :role="alert">{{errores.num_rooms[0]}}
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                            <label for="ciudad" class="form-label">Ciudad</label>
                            <select class="form-select" id="ciudad" v-model="hotel.city_id">
                                <option v-for="ciudad in cities" :value="ciudad.id" :key="ciudad.id">{{ ciudad.name }}
                                </option>
                            </select>
                            <div v-if="errores.name" style="color: red;" :role="alert">{{errores.city_id[0]}}</div>
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <router-link to="/hoteles" class="btn btn-danger row-3 mt-2" aria-current="page" href="#">
                                <i class="bi bi-x-circle"></i>Regresar
                            </router-link>
                            <button @click="sendHotel" type="submit" id="btn_save" class="btn btn-success row-3 mt-2"><i
                                    class="bi bi-plus-circle"></i>
                                Guardar</button>
                        </div>
                        <div v-if="info" class="alert alert-primary mt-3" role="alert">
                            {{info}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import axios from 'axios'
export default {
    beforeMount() {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
            .then(response => (this.cities = response.data))
    },
    data() {
        return {
            errores: {
                nit: null
            },
            info: null,
            cities: [],
            hotel: {
                name: null,
                nit: null,
                address: null,
                num_rooms: null,
                city_id: null
            }
        }
    },
    methods: {
        sendHotel() {
            axios({
                method: 'post',
                url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels',
                data: this.hotel,
                responseType: 'json',
            })
                .then(response => {
                    this.info = response.data.message

                    this.hotel.name = null
                    this.hotel.nit = null
                    this.hotel.address = null
                    this.hotel.num_rooms = null
                    this.hotel.city_id = null

                })
                .catch(error => {
                    this.errores = error.response.data.errors

                })
        }
    },
}
</script>