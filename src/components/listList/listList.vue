<template>
    <nav aria-label="breadcrumb" class="mt-3">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a class="breadcrumb" href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">List: {{ tasksByListId.title }}</li>
        </ol>
    </nav>
    <div class="row m-4">
        <p class="text-center">
            <button type="button" class="btn btn-primary ms-4 add-btn" data-bs-toggle="collapse"
                data-bs-target="#myCollapse">+</button>
        </p>
        <div class="collapse show add-card col-4" id="myCollapse">
            <div class="add-card card-body detail">
                <textarea class="form-control" placeholder="Enter Task" v-model="title" required></textarea>
                <button class="btn btn-primary mt-2 col-4" @click="createTasks" data-bs-toggle="collapse"
                    data-bs-target="#myCollapse">save</button>
            </div>
        </div>
    </div>
    <div class="task-feed mt-5">
        <div class="mt-3 _card status-card" v-for="status in tasksByListId.Status" :key="status.id" :id=status.id
            v-on:drop="drop" v-on:dragover="allowDrop">

            <h3 class="status-name">{{ status.title }}</h3>

            <div v-for="task in tasksByListId.Task" :key="task.id">
                <div class="_card task-card row" v-if="task.statusId == status.id" v-on:dragstart="dragStart"
                    draggable="true" :id=task.id>
                    <div class="del-btn col-10">
                        <a class="del-btn col-1" @click="deleteTask(task.id)">X</a>
                    </div>
                    <h4>
                        {{ task.title }}
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./listList.js"></script>
<style src="../../main.css">

</style>

