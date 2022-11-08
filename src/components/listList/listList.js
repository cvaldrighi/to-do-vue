import axios from "axios";
export default {
    name: 'listList',

    data() {
        return {
            tasksByListId: [],
            tagByTaskId: [],
            title: '',
            listId: '',
            tagId: ''
        }
    },
    mounted() {
        this.getListById();
    },
    methods: {
        async getListById() {
            let id = this.$route.params.id
            this.tasksByListId = (await axios.get(`http://localhost:8000/api/lists/${id}`)).data;
            setTimeout(this.getListById, 0)
        },

        async createTasks() {
            let statusBylist = this.findStatusByList();
            this.result = (await axios.post('http://localhost:8000/api/tasks',
                {
                    title: this.title,
                    listId: parseInt(this.$route.params.id),
                    statusId: statusBylist[0].id,
                    tagId: parseInt(this.tagId)
                }
            )).data;

            this.title = "";
            this.getListById();
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

        // async findTagByTask(id) {
        //     let res = (await axios.get(`http://localhost:8000/api/tasks/${id}`)).data;
        //     for (let i = 0; i < res.tags.length; i++) {
        //         if (res.tags[i].taskId == id) {
        //             console.log(res.tags[i].tagId);
        //             this.tagByTaskId.push(res.tags[i].tagId);
        //         }
        //     }

        // }
    }
}