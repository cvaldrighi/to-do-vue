import axios from "axios";

export default {
    name: 'listList',
    data() {
        return {
            tasksByListId: [],
            title: '',
            isDone: '',
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
            this.result = (await axios.post('http://localhost:8000/api/tasks',
                {
                    title: this.title,
                    isDone: false,
                    listId: parseInt(this.$route.params.id)
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
                const task = this.findTaskById(id);
                const put = (await axios.put(`http://localhost:8000/api/tasks/${id}`, {
                    isDone: !task.isDone
                })).data;
                console.log("atualizando status:", put);
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
        }
    }
}