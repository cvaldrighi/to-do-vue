<template>
    <div class="container">
        <div class="row m-4">
            <p class="text-center">
                <button type="button" class="btn btn-primary ms-4" data-bs-toggle="collapse"
                    data-bs-target="#myCollapse">+</button>
            </p>
            <div class="collapse show task-card col-4" id="myCollapse">
                <div class="card card-body detail">
                    <textarea class="form-control" placeholder="Enter Task" v-model="title" required></textarea>
                    <select v-model="listId" class="form-select mt-2">
                        <option disabled value="">Select a List</option>
                        <option v-for="list in resultList" :key="list.id" v-bind:value="list.id">
                            {{ list.title }}
                        </option>
                    </select>
                    <button class="btn btn-primary mt-2 col-4" @click="createTasks" data-bs-toggle="collapse"
                        data-bs-target="#myCollapse">save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./addTodo.js"></script>

<style scoped>
.addBtn {
    border-radius: 100%;
}

.task-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
}

.detail {
    background-color: #a5a1e6;
    padding: 16px 8px;
    flex: 1 1 100%;
    border-radius: 8px;
}
</style>
