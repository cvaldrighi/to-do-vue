<template>
    <div class="container">

        <!--create list-->
        <div class="add-card col-4 mt-5">
            <div class="add-card card-body detail">
                <input type="text" class="form-control" placeholder="Enter New List" v-model="title" required />
                <button class="btn save-btn mt-2 col-4" @click="createLists" data-bs-toggle="collapse"
                    data-bs-target="#myCollapse">save</button>
            </div>
        </div>

        <!--list feed-->
        <div class="feed mt-5">

            <!--list card-->
            <div class="task-card _card row" v-for="list in resultList" :key="list.id">
                <div class="detail">
                    <div style="display:flex; justify-content: space-between;">

                        <!--modals-->
                        <div>
                            <a class="fa fa-list p-1 icon" data-bs-toggle="modal" data-bs-target="#modalStatus"
                                :data-bs-whatever="list.id" id="status"></a>
                            <a class="fa fa-tag p-1 icon" data-bs-toggle="modal" data-bs-target="#modalTags"
                                :data-bs-whatever="list.id" id="tags"></a>
                        </div>

                        <!--delete-->
                        <div>
                            <a class="del-btn col-1" @click="deleteList(list.id)">X</a>
                        </div>
                    </div>
                    <h4>
                        {{ list.title }}
                    </h4>
                </div>
            </div>
        </div>

        <!-- Modal STATUS -->
        <div class="modal fade" id="modalStatus" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Create Status</h5>
                        <p class="status-list-id" id="status-list-id" style="display:none;">x</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <!--form-->
                        <div class="container-fluid">
                            <div class="row">
                                <div>
                                    <input type="text" class="form-control" placeholder="New Status"
                                        v-model="statusTitle" required />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn save-btn" @click="createStatus">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal TAGS -->
        <div class="modal fade" id="modalTags" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Tags</h5>
                        <p class="tag-list-id" id="tag-list-id" style="display:none;">.</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <!--form-->
                        <div class="container-fluid">
                            <div class="row">
                                <div>
                                    <input type="text" class="form-control" placeholder="New Tag" v-model="tagTitle"
                                        required />
                                </div>
                                <div class="color-feed">
                                    <p>Choose a color</p>
                                    <div class="color-options" @click="selectColor($event)"
                                        :style="{ 'background-color': '#007777', 'color': '#007777' }">
                                        .
                                    </div>

                                    <div class="color-options" @click="selectColor($event)"
                                        :style="{ 'background-color': '#44eecc', 'color': '#44eecc' }">
                                        .
                                    </div>

                                    <div class="color-options" @click="selectColor($event)"
                                        :style="{ 'background-color': '#aacc88', 'color': '#aacc88' }">
                                        .
                                    </div>
                                    <div class="color-options" @click="selectColor($event)"
                                        :style="{ 'background-color': '#ff9248', 'color': '#ff9248' }">
                                        .
                                    </div>
                                    <div class="color-options" @click="selectColor($event)"
                                        :style="{ 'background-color': '#fb2e01', 'color': '#fb2e01' }">
                                        .
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn save-btn" @click="createTags">Save</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script src="./mngList.js"></script>
<style src="../../main.css">

</style>