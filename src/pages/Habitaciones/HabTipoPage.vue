<template>
    <article class="shadow p-4 mb-5 bg-body rounded">
        <div class="pe-5 ps-5 pt-3">
            <h1 class="fs-3"><img src="@/assets/habitacion.png" width="50" height="50" alt=""> Tipos de habitaciones
            </h1>
        </div>
        <div class="pe-5 ps-5 pt-2">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                    </tr>
                </thead>
                <tbody>
                    <!--Por cada habitacion de agrega una fila-->
                    <tr v-for="habitaciones in habitaciones " :key="habitaciones.id" class="">
                        <td> {{habitaciones.id}} </td>
                        <td> {{habitaciones.name}} </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    </article>
</template>
<script>
    //Importamos la libreria de axios
    import axios from 'axios'
    
    export default {
        //Antes de que se ejecute
        beforeMount() {
            //Obtiene el tipo de habitaciones
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types')
            .then(response => (this.habitaciones = response.data))
        },
        data() {
            return {
                habitaciones: []
            }
        }
    }
</script>