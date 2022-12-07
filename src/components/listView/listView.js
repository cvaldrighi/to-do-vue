import axios from "axios";
import NavTodo from "../navTodo/navTodo.vue";
import FileUpload from "../fileUpload/fileUpload.vue";

export default {
    name: 'listList',
    components: {
        NavTodo,
        FileUpload
    },
    data() {
        return {
            tags: [],
            tagsByTasks: [],
            selectedTags: [],
            listById: [],
            tasksByListId: [],
            statusByListId: [],
            taskTitle: '',
        }
    },
    mounted() {
        this.getListById();
        this.getTags();
    },
    methods: {
        //api
        async getTasksByListId() {
            let id = this.$route.params.id;
            this.tasksByListId = (await axios.get(`http://localhost:8000/api/tasks/list/${id}`)).data;
        },

        async getStatusByListId() {
            let id = this.$route.params.id;
            this.statusByListId = (await axios.get(`http://localhost:8000/api/status/list/${id}`)).data;
        },

        async getListById() {
            let id = this.$route.params.id
            this.listById = (await axios.get(`http://localhost:8000/api/lists/${id}`)).data;

            this.getTagsByTasks();
            this.getTasksByListId();
            this.getStatusByListId();
            setTimeout(this.getListById, 500);
        },

        async getTagsByTasks() {
            let tasks;
            tasks = (await axios.get('http://localhost:8000/api/tasks/')).data;
            tasks.forEach(task => {
                this.tagsByTasks[task.id] = task.tags;
            })
        },

        async getTags() {
            this.tags = (await axios.get('http://localhost:8000/api/tags/')).data;
        },

        async createTasks() {
            let tagsArr = [];
            this.selectedTags.forEach(tag => {
                tagsArr.push(tag);
            })

            const post = (await axios.post('http://localhost:8000/api/tasks',
                {
                    title: this.taskTitle,
                    listId: parseInt(this.$route.params.id),
                    statusId: this.statusByListId[0].id,
                    tagId: tagsArr
                }
            )).data;

            this.taskTitle = "";
            this.selectedTags = [];
            this.getListById();
            console.log("Task created:", post);
        },

        async deleteTask(id) {
            try {
                await axios.delete(`http://localhost:8000/api/tasks/${id}`);
            } catch (err) {
                console.log(err);
            }
            this.getListById();
        },

        async updateStatus(id, e) {
            try {
                const put = (await axios.put(`http://localhost:8000/api/tasks/status/${id}`, {
                    statusId: parseInt(e)
                })).data;

                console.log("atualizando status:", put);

            } catch (err) {
                console.log(err);
            }

            this.getListById();
        },

        //DnD
        dragStart: function (event) {
            event.dataTransfer.setData("Text", event.target.id);
            console.log("drag start");
        },

        allowDrop: function (event) {
            event.preventDefault();
        },

        drop: function (event) {
            event.preventDefault();
            var taskId = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(taskId));
            console.log("drop:", taskId, event.target.id);
            this.updateStatus(taskId, event.target.id);
        },

        //helpers
        selectTags(e) {
            this.selectedTags.push(parseInt(e.target.value));
        }
    }
}