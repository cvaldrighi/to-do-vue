<template>
  <div class="container">
    <div class="row">
      <label>select a list to display</label>
      <select v-model="listId" class="form-select mt-2" @change="getListById($event)">
        <option disabled value="">Select a List</option>
        <option v-for="list in resultList" :value="list.id" :key="list.id">
          {{ list.title }}
        </option>
      </select>
    </div>

    <div class="task-feed mt-5">

      <div class="task-card" v-for="task in tasksByListId" :key="task.id">
        <div class="detail">
          <div class="row justify-content-end m-1">
            <div v-if="!task.isDone" class="col-1">
              <input type="checkbox" @change="updateStatus(task.id)">
            </div>
            <div v-else class="col-1">
              <input type="checkbox" checked @change="updateStatus(task.id)">
            </div>
            <a class="button is-danger is-small col-1" @click="deleteTask(task.id)">X</a>
          </div>
          <h4>
            {{ task.title }}
          </h4>
        </div>
      </div>
    </div>

    <!-- <div class="task-feed">
      <div class="task-card" v-for="task in result" :key="task.id">
        <div class="detail">
          <div class="row justify-content-end m-1">
            <div v-if="!task.isDone" class="col-1">
              <input type="checkbox" @change="updateStatus(task.id)">
            </div>
            <div v-else class="col-1">
              <input type="checkbox" checked @change="updateStatus(task.id)">
            </div>
            <a class="button is-danger is-small col-1" @click="deleteTask(task.id)">X</a>
          </div>
          <h3 class="title">{{ task.title }}</h3>
          <p>{{ task.list.title }}</p>
        </div>
      </div>
    </div> -->
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

.task-feed {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.task-card {
  margin: 4px;
}

.detail {
  background-color: #a5a1e6;
  padding: 16px 8px;
  flex: 1 1 100%;
  border-radius: 8px;
}
</style>
