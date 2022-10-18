<template>
  <div class="container">
    <table class="table table-striped table-dark mt-2 ">
      <thead>
        <tr>
          <th>Task</th>
          <th>is done?</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in result" :key="task.id">
          <td>{{ task.title }}</td>
          <td>{{ task.isDone }}

          </td>
          <td><a class="button is-danger is-small" @click="deleteTask(task.id)">X</a></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script src="./listTodo.js"></script>

<style scoped>
ul {
  margin: 8px;
  padding: 12px;
}

a {
  cursor: pointer;
  color: white;
  text-decoration: none;
}
</style>
