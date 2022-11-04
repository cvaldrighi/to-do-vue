<template>
    <div class="container">
        <div class="add-card col-4 mt-5">
            <div class="add-card card-body detail">
                <input type="text" class="form-control" placeholder="Enter New List" v-model="title" required />
                <button class="btn btn-primary mt-2 col-4" @click="createLists" data-bs-toggle="collapse"
                    data-bs-target="#myCollapse">save</button>
            </div>
        </div>

        <div class="task-feed mt-5">
            <div class="task-card _card mt-3" v-for="list in resultList" :key="list.id">
                <div class="detail">
                    <div class="row justify-content-end m-1">
                        <a class="del-btn col-1" @click="deleteList(list.id)">X</a>
                    </div>
                    <h4>
                        {{ list.title }}
                    </h4>
                </div>
            </div>
        </div>

    </div>

</template>
<script src="./mngList.js"></script>
<style src="../../main.css">

</style>