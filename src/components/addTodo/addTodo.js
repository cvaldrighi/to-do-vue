import axios from "axios";
export default {
    name: 'AddTodo',
    data() {
        return {
            title: '',
            isDone: '',
            listId: '',
            resultList: []
        }
    },
    mounted() {
        this.getLists();
    },
    methods: {
        async createTasks() {
            this.result = (await axios.post('http://localhost:8000/api/tasks',
                {
                    title: this.title,
                    isDone: false,
                    listId: this.listId
                }
            )).data;
            this.title = "";
            console.log(this.result);
        },
        async getLists() {
            this.resultList = (await axios.get('http://localhost:8000/api/lists')).data;
        },
    }
}