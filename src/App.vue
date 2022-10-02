<template>
  <header>
    <HeaderComponent />
    <main class="container">
      <router-view></router-view>
    </main>
  </header>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>

</style>
