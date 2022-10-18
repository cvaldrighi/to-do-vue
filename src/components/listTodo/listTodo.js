import axios from "axios";
export default {
    name: 'listTodo',
    data() {
        return {
            result: [],
            title: ''
        }
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        async getTasks() {
            this.result = (await axios.get('http://localhost:8000/api/tasks')).data;
            this.getTasks();
            console.log(this.result);
        },
        async deleteTask(id) {
            try {
                await axios.delete(`http://localhost:8000/api/tasks/${id}`);
                this.getTasks();
            } catch (err) {
                console.log(err);
            }
        },
    }
}