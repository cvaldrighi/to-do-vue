<template>
  <div class="container">
    <h1 class="text-center mt-5">Vue To-Do App</h1>

    <!--input-->
    <div class="d-flex">
      <input type="text" placeholder="enter task" class="form-control" />
      <button class="btn btn-warning">ok</button>
    </div>

    <!--table-->
    <div class="mt-3">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Is done?</th>
            <th scope="col" class="text-center">#</th>
            <th scope="col" class="text-center">#</th>
          </tr>
        </thead>
        <tr v-for="task of result" :key="task.id">
          <td>{{task.title}}</td>
          <td>{{task.isDone}}</td>
          <td>
            <div class="text-center">
              <span class=" fa fa-pen"></span>
            </div>
          </td>
          <td>
            <div class="text-center">
              <span class=" fa fa-trash"></span>
            </div>
          </td>
        </tr>

      </table>
    </div>

  </div>
</template>

<script src="./todoList.js">

</script>
<style scoped>

</style>
