<!-- eslint-disable vue/require-v-for-key -->
<template>
    <article class="shadow p-4 mb-5 bg-body rounded">
      <!--Si se obtiene un hotel por medio del id asignada, se mostrara la informacion del hotel-->
      <div v-if="success" class="p-4">
        <!--Menu de navegacion-->
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            <div class="navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <router-link to="/" class="nav-item nav-link" aria-current="page" href="#">
                    <i class="bi bi-house-fill me-1"></i> Inicio
                </router-link>
                <router-link to="/hoteles" class="nav-item nav-link" aria-current="page" href="#">
                    <i class="bi bi-chevron-right me-1"></i> Hoteles
                </router-link>
                <li class="nav-item">
                    <p class="nav-link text-primary fw-bold  active"><i class="bi bi-chevron-right me-1"></i>Actualizar
                        Datos de Hotel
                    </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="row">
          <div class="col ms-3">
            <h1 class="fs-3"><i class="bi bi-bank me-2"></i> Hotel</h1>
          </div>
          <div class="container p-4">
            <div class="row" method="POST" id="formulario" enctype="multipart/form-data">
              <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                <div class="mb-3">
                  <label for="" class="form-label">Nombre</label>
                  <input v-model="hotel.name" type="text" id="name" class="form-control">
                  <div v-if="errores.name" class="text-danger" :role="alert">{{errores.name[0]}}</div>
                </div>
              </div>
              <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                <div class="mb-3">
                  <label for="" class="form-label">NIT</label>
                  <input v-model="hotel.nit" type="number" id="nit" class="form-control">
                  <div v-if="errores.nit" class="text-danger" :role="alert">{{errores.nit[0]}}</div>
                </div>
              </div>
              <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                <div class="mb-3">
                  <label for="" class="form-label">Dirección</label>
                  <input v-model="hotel.address" type="text" id="address" class="form-control">
                  <div v-if="errores.address" class="text-danger" :role="alert">{{errores.address[0]}}</div>
                </div>
              </div>
              <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                <div class="mb-3">
                  <label for="" class="form-label">Número de habitaciones</label>
                  <input v-model="hotel.num_rooms" type="number" id="num_rooms" class="form-control">
                  <div v-if="errores.num_rooms" class="text-danger" :role="alert">{{errores.num_rooms[0]}}</div>
                </div>
              </div>
              <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-2">
                <label for="" class="form-label">Ciudad</label>
                <select v-model="hotel.city_id" id="city_id" class="form-control select-picker">
                  <option v-for="city in cities" :value="city.id" :key="city.id">{{city.name}}</option>
                </select>
                <div v-if="errores.city_id" class="text-danger" :role="alert">{{errores.city_id[0]}}</div>
              </div>

                <div v-if="info" class="alert alert-success" role="alert">
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

      <!--Se muestra en caso de que el id del hotel pasado por parametro no se encuentre-->
      <div class="p-4 d-none" id="notId">
        <div class="alert alert-warning" role="alert">
           El id ingresado no se encuentra registrado
        </div>
      </div>
    </article>
</template>

<script>
//importamos axios
import axios from 'axios';

export default {
  //Antes de que se ejecute
    beforeMount() {
      //Se obtienen los hoteles
        this.getHotel()
    },
    props: {
        id: Object,
        params: Object,
    },
    data() {
        return {
            errores: {},
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
        //Metodo para obtener los hoteles
        getHotel() {
            //Se obtienen las ciudades
            axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
                .then(response => ( this.cities = response.data ))
            
            //Se obtiene los hoteles
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.id)
            .then(response => ( 
                this.hotel = response.data.data,
                this.success = response.data.success,
                //Si no se obtiene un hotel por id dado, muestra una advertencia
                (!this.success)?document.getElementById("notId").classList.remove("d-none"):""
                ))

        },
        //Metodo para cargar el componente de hoteles
        viewHotelesPage() {
            this.$router.push({ name: 'HotelesPage'})
        },
        //Metodo para actualizar la informacion del hotel
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
                this.errores = {}
            })
            .catch(error => {
                this.errores = error.response.data.errors
                this.info = null
            })

          //Despues de 5 segundos se quitan los errores y mensajes de la vista
          setTimeout(() => {
            this.info = null
            this.errores = {}
          }, 5000)
            
        },
        //Metodo para eliminar un hotel
        eliminar(id) {
            this.errores = {}
            //Confirma que se quiera eliminar el hotel
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
            //Despues de 5 segundos se quitan los errores y mensajes de la vista
            setTimeout(() => {
              this.info = null
              this.errores = {}
            }, 5000)
        }
    }
    
}

</script>