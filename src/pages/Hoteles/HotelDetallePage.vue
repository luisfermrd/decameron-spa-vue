<!-- eslint-disable vue/require-v-for-key -->
<template>
    <article class="shadow p-4 mb-5 bg-body rounded">
      <div v-if="success" class="p-4">
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            <div class="navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="index.html"><i class="bi bi-house-fill me-1"></i>Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="hoteles.html"><i class="bi bi-chevron-right me-1"></i>Hoteles</a>
                </li>
                <li class="nav-item">
                  <p class="nav-link text-primary fw-bold  active"><i class="bi bi-chevron-right me-1"></i>Actualizar
                    Datos de Hotel</p>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="row">
          <div class="col ms-3">
            <h1 class="fs-3"><i class="bi bi-bank me-2"></i>Hotel</h1>
          </div>
          <div class="container p-4">
            <div class="row" method="POST" id="formulario" enctype="multipart/form-data">
              <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                <div class="mb-3">
                  <label for="" class="form-label">Nombre</label>
                  <input v-model="hotel.name" type="text" id="name" class="form-control">
                    <div v-if="Array.isArray(errores.name)" class="text-danger">
                        <p v-for="msg1 in errores.name" >{{ msg1 }}</p>
                    </div>
                </div>
              </div>
              <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                <div class="mb-3">
                  <label for="" class="form-label">NIT</label>
                  <input v-model="hotel.nit" type="number" id="nit" class="form-control">
                  <div v-if="Array.isArray(errores.nit)" class="text-danger">
                        <p v-for="msg1 in errores.nit" >{{ msg1 }}</p>
                    </div>
                </div>
              </div>
              <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                <div class="mb-3">
                  <label for="" class="form-label">Dirección</label>
                  <input v-model="hotel.address" type="text" id="address" class="form-control">
                    <div v-if="Array.isArray(errores.address)" class="text-danger">
                        <p v-for="msg1 in errores.address" >{{ msg1 }}</p>
                    </div>
                </div>
              </div>
              <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                <div class="mb-3">
                  <label for="" class="form-label">Número de habitaciones</label>
                  <input v-model="hotel.num_rooms" type="number" id="num_rooms" class="form-control">
                    <div v-if="Array.isArray(errores.num_rooms)" class="text-danger">
                        <p v-for="msg1 in errores.num_rooms" >{{ msg1 }}</p>
                    </div>
                </div>
              </div>
              <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                <label for="" class="form-label">Ciudad</label>
                <select v-model="hotel.city_id" id="city_id" class="form-control select-picker">
                  <option v-for="city in cities" :value="city.id" :key="city.id">{{city.name}}</option>
                </select>
                <div v-if="Array.isArray(errores.city_id)" class="text-danger">
                        <p v-for="msg1 in errores.city_id" >{{ msg1 }}</p>
                </div>
              </div>

                <div v-if="info" class="alert alert-primary" role="alert">
                    {{info}}
                </div>

                <div v-if="errores.simple" class="alert alert-danger" role="alert">
                    {{errores.simple}}
                </div>


              <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-between">
                <button @click="eliminar(this.$route.params.id)" type="button" class="btn btn-danger row-3 mt-2" v-bind:class="ocultar">
                    <i class="bi bi-x-circle"></i> Eliminar hotel</button>
                <button @click="viewHotelesPage" type="button" class="btn btn-primary row-3 mt-2" v-bind:class="{'visually-hidden': mostrar}">
                    <i class="bi bi-arrow-left"></i> Regresar</button>
                <button @click="actualizar" type="button" class="btn btn-success row-3 mt-2" v-bind:class="ocultar">
                    <i class="bi bi-arrow-clockwise"></i> Actualizar datos</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 d-none" id="notId">
        <div class="alert alert-warning" role="alert">
           El id ingresado no se encuentra registrado
        </div>
      </div>
    </article>
</template>

<script>

import axios from 'axios';

export default {
    beforeMount() {
        this.getHotel()
    },
    props: {
        id: Object,
        params: Object,
    },
    data() {
        return {
            errores: Object,
            info: null,
            cities: Object,
            ocultar: null,
            mostrar: true,
            success: false,
            hotel: {
                name: null,
                nit: null,
                address: null,
                num_rooms: null,
                city_id: null,
                city: {
                    name: null 
                }
            },
        }
    },
    methods: {
        
        getHotel() {
            axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
                .then(response => ( this.cities = response.data ))
            
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.id)
            .then(response => ( 
                this.hotel = response.data.data,
                this.success = response.data.success,
                (this.success)?document.getElementById("notId").element.classList.remove("d-none"):""
                ))

        },
        viewHotelesPage() {
            this.$router.push({ name: 'HotelesPage'})
        },
        actualizar() {
            this.error = false
            this.info = false
            axios({
                method: 'put',
                url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.id,
                data: this.hotel,
                responseType: 'json', 
            }) 
            .then(response => {
                
                this.info = response.data.message
                this.errores = Object
                // this.hotel = response.data.data
            })
            .catch(error => {
                this.errores = error.response.data.errors
                this.info = null
                // this.message = error.response.data.message
            })
            
        },
        
        eliminar(id) {
            this.errores = []
            if (confirm('¿Esta seguro que desea eliminar este hotel?')) {
                axios({
                    method: 'delete',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+id,
                    responseType: 'json', 
                }) 
                .then(response => {  
                    this.mostrar = false
                    this.ocultar = 'visually-hidden'
                    this.info = response.data.message
                    this.hotel = [] 
                })
                .catch(error => {
                    this.errores = error.response.data.errors
                    this.info = null
                })       
            }
        }
    }
    
}

</script>