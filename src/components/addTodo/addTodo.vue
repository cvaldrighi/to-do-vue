<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <input class="input form-control" type="text" placeholder="Enter Task" v-model="title" required />
            </div>
        </div>
        <div class="col">
            <button class="btn btn-dark mt-2" @click="createTasks">ok</button>
        </div>
    </div>
</template>

<script src="./addTodo.js"></script>
