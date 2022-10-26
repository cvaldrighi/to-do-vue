<template>
  <NavTodo />
  <div class="container">

    <router-view />

  </div>
</template>

<script>
import NavTodo from './components/navTodo/navTodo.vue';

export default {
  name: 'App',
  components: {
    NavTodo,
  }
}
</script>

<style>

</style>
