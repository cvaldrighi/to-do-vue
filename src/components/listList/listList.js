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


        async updateStatus(id) {
            try {
                //let statusBylist = this.findStatusByList();
                const task = this.findTaskById(id);

                //only works for the first list
                //need to make it dinamic 
                if (task.statusId == 1) {
                    task.statusId = 2;
                } else if (task.statusId == 2) {
                    task.statusId = 3
                }

                const put = (await axios.put(`http://localhost:8000/api/tasks/${id}`, {
                    statusId: task.statusId
                })).data;

                console.log("atualizando status:", put);
                //console.log(statusByList);

            } catch (err) {
                console.log(err);
            }
            this.getListById();
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