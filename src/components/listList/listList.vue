<template>
    <div class="container">
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
            <div class="task-card mt-3" v-for="status in tasksByListId.Status" :key="status.id">
                <div class="detail status-card" :id=status.id v-on:drop="drop" v-on:dragover="allowDrop">
                    <h3 class="text-center">{{ status.title }}</h3>
                    <div class="task-card task" v-for="task in tasksByListId.Task" :key="task.id"
                        v-on:dragstart="dragStart" draggable="true" :id=task.id>
                        <div v-if="task.statusId == status.id">
                            <div class="detail">
                                <div class="row justify-content-end m-1">
                                    <a class="button is-danger is-small col-1" @click="deleteTask(task.id)">X</a>
                                </div>
                                <h4>
                                    {{ task.title }}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script src="./listList.js"></script>
<style src="../../main.css">

</style>

