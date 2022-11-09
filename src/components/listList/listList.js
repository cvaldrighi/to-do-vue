import axios from "axios";
export default {
    name: 'listList',

    data() {
        return {
            tasksByListId: [],
            taskTags: [],
            tags: [],
            title: '',
            listId: '',
            selectedTags: []
        }
    },
    mounted() {
        this.getListById();
        this.getTaskTags();
        this.getTags();
    },
    methods: {
        //api
        async getListById() {
            let id = this.$route.params.id
            this.tasksByListId = (await axios.get(`http://localhost:8000/api/lists/${id}`)).data;
            setTimeout(this.getListById, 300)

        },

        async getTaskTags() {
            let tasks;
            tasks = (await axios.get('http://localhost:8000/api/tasks/')).data;
            tasks.forEach(task => {
                task.tags.forEach(tags => {
                    this.taskTags.push(tags);
                })
            })

        },

        async getTags() {
            this.tags = (await axios.get('http://localhost:8000/api/tags/')).data;

        },

        async createTasks() {
            let statusBylist = this.findStatusByList();
            let tags = [];
            this.selectedTags.forEach(i => {
                tags.push(i);
            })
            this.result = (await axios.post('http://localhost:8000/api/tasks',
                {
                    title: this.title,
                    listId: parseInt(this.$route.params.id),
                    statusId: statusBylist[0].id,
                    tagId: tags
                }
            )).data;

            this.title = "";
            this.selectedTags = [];
            console.log("Task created:", this.result);
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
                const task = this.findTaskById(id);

                task.statusId = parseInt(e);
                const put = (await axios.put(`http://localhost:8000/api/tasks/status/${id}`, {
                    statusId: task.statusId
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
            this.updateStatus(taskId, event.target.id);
        },

        //helpers
        findTaskById(id) {
            for (let i = 0; i < this.tasksByListId.Task.length; i++) {
                if (this.tasksByListId.Task[i].id == id) {
                    return this.tasksByListId.Task[i];
                }
            }
        },

        findStatusByList() {
            let statusByList = [];
            this.tasksByListId.Status.forEach(e => {
                statusByList.push(e);
            })
            return statusByList;
        },

        selectTags(e) {
            this.selectedTags.push(parseInt(e.target.value));
        }
    }
}