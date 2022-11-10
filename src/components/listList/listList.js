import axios from "axios";
export default {
    name: 'listList',

    data() {
        return {
            listById: [],
            tagsByTasks: [],
            tags: [],
            taskTitle: '',
            listId: '',
            selectedTags: []
        }
    },
    mounted() {
        this.getListById();
        this.getTagsByTasks();
        this.getTags();
    },
    methods: {
        //api
        async getListById() {
            let id = this.$route.params.id
            this.listById = (await axios.get(`http://localhost:8000/api/lists/${id}`)).data;
            setTimeout(this.getListById, 500)
        },

        async getTagsByTasks() {
            let tasks;
            tasks = (await axios.get('http://localhost:8000/api/tasks/')).data;
            tasks.forEach(task => {
                task.tags.forEach(tags => {
                    this.tagsByTasks.push(tags);
                })
            })
        },

        async getTags() {
            this.tags = (await axios.get('http://localhost:8000/api/tags/')).data;
        },

        async createTasks() {
            let statusBylist = this.findStatusByList();
            let tagsArr = [];
            this.selectedTags.forEach(i => {
                tagsArr.push(i);
            })

            const post = (await axios.post('http://localhost:8000/api/tasks',
                {
                    title: this.taskTitle,
                    listId: parseInt(this.$route.params.id),
                    statusId: statusBylist[0].id,
                    tagId: tagsArr
                }
            )).data;

            this.taskTitle = "";
            this.selectedTags = [];
            // location.reload();
            // this.getListById();
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
            for (let i = 0; i < this.listById.Task.length; i++) {
                if (this.listById.Task[i].id == id) {
                    return this.listById.Task[i];
                }
            }
        },

        findStatusByList() {
            let statusByList = [];
            this.listById.Status.forEach(e => {
                statusByList.push(e);
            })
            return statusByList;
        },

        selectTags(e) {
            this.selectedTags.push(parseInt(e.target.value));
        }
    }
}