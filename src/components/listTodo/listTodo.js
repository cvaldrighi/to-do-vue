import axios from "axios";
export default {
    name: 'listTodo',
    data() {
        return {
            result: [],
            //title: ''
        }
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        async getTasks() {
            this.result = (await axios.get('http://localhost:8000/api/tasks')).data;
            this.getTasks();
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
                this.getTasks;
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