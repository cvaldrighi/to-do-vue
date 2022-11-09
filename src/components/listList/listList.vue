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
                <select class="form-select mt-2" size="3" multiple v-model="tagId" required
                    @change="selectTags($event)">
                    <option disabled>Select tag</option>
                    <option v-for="tag in tasksByListId.Tag" :key="tag.id" :value="tag.id">{{ tag.title }}</option>
                </select>
                <button class="btn save-btn mt-2 col-4" @click="createTasks" data-bs-toggle="collapse"
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

                    <div class="header-task-card">
                        <div style="display:flex">
                            <div v-for="tag in taskTags" :key="tag">
                                <div v-if="tag.taskId == task.id">
                                    <div v-for="i in tags" :key="i">
                                        <div class="tag-card" data-bs-toggle="tooltip" data-bs-placement="top"
                                            :title=i.title :style="{ 'background-color': i.color, 'color': i.color }"
                                            v-if="i.id == tag.tagId">
                                            .
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <a class="del-btn" @click="deleteTask(task.id)">X</a>

                    </div>
                    <h4 class="mt-2">
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

