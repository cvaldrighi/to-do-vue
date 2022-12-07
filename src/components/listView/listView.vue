<template>
    <NavTodo />
    <!--breadcrumb-->
    <nav aria-label="breadcrumb" class="mt-3">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a class="breadcrumb" href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">List: {{ listById.title }}</li>
        </ol>
    </nav>

    <!--create task-->
    <div class="row m-4">
        <p class="text-center">
            <button type="button" class="btn btn-primary ms-4 add-btn" data-bs-toggle="collapse"
                data-bs-target="#myCollapse">+</button>
        </p>
        <div class="collapse show add-card col-4" id="myCollapse">
            <div class="add-card card-body detail">
                <textarea class="form-control" placeholder="Enter Task" v-model="taskTitle" required></textarea>
                <select class="form-select mt-2" size="3" multiple v-model="tagId" required
                    @change="selectTags($event)">
                    <option disabled>Select tag</option>
                    <option v-for="tag in listById.Tag" :key="tag.id" :value="tag.id">{{ tag.title }}</option>
                </select>
                <button class="btn save-btn mt-2 col-4" @click="createTasks" data-bs-toggle="collapse"
                    data-bs-target="#myCollapse">save</button>
            </div>
        </div>
    </div>

    <!--task feed-->
    <div class="feed mt-5">

        <!--status card-->
        <div class="mt-3 _card status-card" v-for="status in statusByListId" :key="status.id" :id=status.id
            v-on:drop="drop" v-on:dragover="allowDrop">

            <h3 class="status-name">{{ status.title }}</h3>

            <!--task card-->
            <div v-for="task in tasksByListId" :key="task.id">
                <div class="_card task-card row" v-if="task.status.id == status.id" v-on:dragstart="dragStart"
                    draggable="true" :id=task.id>
                    <div class="header-task-card">

                        <!--tags-->
                        <div style="display:flex">
                            <div v-for="tag in tagsByTasks[task.id]" :key="tag">
                                <div v-for="_tag in tags" :key="_tag">
                                    <div class="tag-card" data-bs-toggle="tooltip" data-bs-placement="top"
                                        :title=_tag.title
                                        :style="{ 'background-color': _tag.color, 'color': _tag.color }"
                                        v-if="_tag.id == tag.tagId">
                                        .
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--delete-->
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
<script src="./listView.js"></script>
<style src="../../main.css">

</style>

