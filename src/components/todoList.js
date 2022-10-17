import axios from "axios";
export default {
    name: 'TodoList',
    data() {
        return {
            result: {}
        }
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        async getTasks() {
            this.result = (await axios.get('http://localhost:8000/api/tasks')).data;
            console.log(this.result);
        }
    }
}