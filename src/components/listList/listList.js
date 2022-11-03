import axios from "axios";
export default {
    name: 'listList',
    data() {
        return {
            tasksByListId: [],
            title: '',
            listId: '',
        }
    },
    mounted() {
        this.getListById();
    },
    methods: {
        async getListById() {
            let id = this.$route.params.id
            this.tasksByListId = (await axios.get(`http://localhost:8000/api/lists/${id}`)).data;

            setTimeout(this.getListById, 500)
        },

        async createTasks() {
            let statusBylist = this.findStatusByList();
            this.result = (await axios.post('http://localhost:8000/api/tasks',
                {
                    title: this.title,
                    listId: parseInt(this.$route.params.id),
                    statusId: statusBylist[0].id
                }
            )).data;

            this.title = "";
            this.getListById();
            console.log("List created:", this.result);
        },

        async deleteTask(id) {
            try {
                await axios.delete(`http://localhost:8000/api/tasks/${id}`);
            } catch (err) {
                console.log(err);
            }

            this.getListById();
        },
        async updateStatus(id, status) {
            try {
                let statusId = parseInt(status);
                const put = (await axios.put(`http://localhost:8000/api/tasks/status/${id}`, {
                    statusId: statusId
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
            let taskId = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(taskId));

            let status = event.target.id;

            this.updateStatus(taskId, status);
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
        }
    }
}