<template>
  <div class="container">

    <h1 class="text-center mt-5">ToDo List</h1>
    <AddTodo />
    <ListTodo />

  </div>
</template>

<script>
import ListTodo from './components/listTodo/listTodo.vue';
import AddTodo from './components/addTodo/addTodo.vue';

export default {
  name: 'App',
  components: {
    ListTodo,
    AddTodo
  }
}
</script>

<style>

</style>
