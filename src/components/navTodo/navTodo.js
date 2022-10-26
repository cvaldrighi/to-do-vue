import axios from "axios";
export default {
    name: 'NavBar',
    data() {
        return {
            resultList: []
        }
    },
    mounted() {
        this.getLists();
    },
    methods: {
        async getLists() {
            this.resultList = (await axios.get('http://localhost:8000/api/lists')).data;
            setTimeout(this.getLists, 100)
        },
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
            return date;
        }
    }
}