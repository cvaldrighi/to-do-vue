import axios from "axios";
export default {
    name: 'listTodo',
    data() {
        return {
            result: [],
            resultList: [],
            tasksByListId: [],
        }
    },
    mounted() {
        this.getTasks();
        this.getLists();
    },
    methods: {
        async getTasks() {
            this.result = (await axios.get('http://localhost:8000/api/tasks')).data;
            this.getTasks();
        },
        async getLists() {
            this.resultList = (await axios.get('http://localhost:8000/api/lists')).data;
            console.log(this.resultList);
        },
        async getListById(e) {
            let id = e.target.value;
            this.tasksByListId = (await axios.get(`http://localhost:8000/api/lists/${id}`)).data.Task;
            console.log(this.tasksByListId);
        },
        async deleteTask(id) {
            try {
                await axios.delete(`http://localhost:8000/api/tasks/${id}`);
                this.getTasks();
            } catch (err) {
                console.log(err);
            }
        },
        async updateStatus(id) {
            try {
                const task = this.findTaskById(id);
                const put = (await axios.put(`http://localhost:8000/api/tasks/${id}`, {
                    isDone: !task.isDone
                })).data;
                console.log(put);
            } catch (err) {
                console.log(err);
            }
        },
        findTaskById(id) {
            for (let i = 0; i < this.result.length; i++) {
                if (this.result[i].id == id) {
                    return this.result[i];
                }
            }
        }
    }
}