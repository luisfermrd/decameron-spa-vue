<template>
  <article class="shadow p-4 mb-5 bg-body rounded">
    <div class="p-4">
      <div class="row">
        <div class="col">
          <h1 class="fs-3"><i class="bi bi-bank me-2"></i>Hoteles</h1>
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <!--Boton para crear un nuevo hotel-->
          <button @click="viewFormHotelCreate" type="button" class="btn btn-success"><i class="bi bi-plus-lg"></i> Crear
            hotel</button>
        </div>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NIT</th>
              <th scope="col">NOMBRES</th>
              <th scope="col">APELLIDOS</th>
              <th scope="col">CIUDAD</th>
              <th scope="col" class="text-center">CAPACIDAD HAB</th>
              <th scope="col">&nbsp;</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <!--Por cada hotel se agrega una fila-->
            <tr v-for="hotel in hoteles" :key="hotel.id" class="">
              <td> {{hotel.id}} </td>
              <td scope="row"> {{hotel.nit}} </td>
              <td> {{hotel.name}} </td>
              <td> {{hotel.address}} </td>
              <td> {{hotel.city.name}} </td>
              <td class="text-center"> {{hotel.num_rooms}} </td>
              <td>
                <button type="button" @click="viewHotel(hotel.id)" class="btn btn-warning rounded-5 text-light me-3">
                  Detalle
                </button>
              </td>
              <td>
                <button type="button" @click="detailHotel(hotel.id)" class="btn btn-primary rounded-5">
                  Habitaciones
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</template>

<script>
  //importamos axios
import axios from 'axios'

export default {
  //antes de que se ejecute
  beforeMount() {
    //obtenemos los hoteles
    axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels')
    .then(response => (this.hoteles = response.data.data))
  },
  data() {
    return {
      hoteles: []
    }
  },
  methods: {
    //Metodo para abrir el componente de crear un nuevo hotel
    viewFormHotelCreate() {
      this.$router.push({ name: 'HotelCreatePage'})
    },
    //Metodo para abrir el componente de detalles de un hotel
    viewHotel(id) {
      this.$router.push({name: 'HotelDetallePage',
                          params: { 
                            id: id
                          }
      })
    },
    //Metodo para abrir el componente de las habitaciones de un hotel
    detailHotel(id) {
      this.$router.push({name: 'HabitacionPage',
                          params: { 
                            id: id
                          }
      })
    }
  }
}
</script>
