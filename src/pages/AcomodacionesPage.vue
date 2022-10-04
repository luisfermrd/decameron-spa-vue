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
                    <tr v-for="acomodaciones in acomodaciones" :key="acomodaciones.id" class="">
                        <td> {{acomodaciones.id}} </td>
                        <td> {{acomodaciones.name}} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </article>
</template>
<script>
    import axios from 'axios'
    export default {
        beforeMount() {
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types').then(response => (this.acomodaciones = response.data))
        },
        data() {
            return {
                acomodaciones: []
            }
        }
    }
</script>


