import axios from "axios";
export default {
    name: 'mngList',
    data() {
        return {
            title: '',
            resultList: []
        }
    },
    mounted() {
        this.getLists();
    },
    methods: {
        async createLists() {
            this.result = (await axios.post('http://localhost:8000/api/lists',
                {
                    title: this.title
                }
            )).data;
            this.title = "";
            console.log(this.result);
            setTimeout(this.getLists, 100)
        },
        async getLists() {
            this.resultList = (await axios.get('http://localhost:8000/api/lists')).data;
            console.log(this.resultList);
        },
        async deleteList(id) {
            try {
                await axios.delete(`http://localhost:8000/api/lists/${id}`);
            } catch (err) {
                console.log(err);
            }
            this.getLists();
        },
    }
}