import axios from "axios";
export default {
    name: 'AddTodo',
    data() {
        return {
            title: '',
            isDone: ''
        }
    },
    methods: {
        async createTasks() {
            this.result = (await axios.post('http://localhost:8000/api/tasks',
                {
                    title: this.title,
                    isDone: false
                }
            )).data;
            this.title = "";
            console.log(this.result);
        }
    }
}