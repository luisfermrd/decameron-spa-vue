<template>
    <article class="shadow p-4 mb-5 bg-body rounded">
        <div class="pe-5 ps-5 pt-3">
            <h1 class="fs-3"><img src="@/assets/grupo-de-usuarios.png" width="50" height="50" alt=""> Acomodaciones</h1>
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
                    <tr>
                        <th scope="row">1</th>
                        <td>TRIPLE</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>DOBLE</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>SENCILLA</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>CUADRUPLE</td>
                    </tr>
                </tbody>
                <tr v-for="hotel in acomodaciones " :key="acomodaciones.id" class="">
                    <td> {{acomodaciones.id}} </td>
                    <td scope="row"> {{acomodaciones.nit}} </td>
                    <td> {{acomodaciones.name}} </td>
                    <td><button type="button" @click="viewacomodaciones(acomodaciones.id)"
                            class="btn btn-warning rounded-5 text-light me-3">Detalle</button></td>
                </tr>



            </table>
        </div>
    </article>
</template>
<script>
import axios from 'axios'

export default {
    beforeMount() {
        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/acomodaciones-types').then(response => (this.hoteles = response.data.data))
    },
    data() {
        return {
            acomodaciones: []
        }
    }
}