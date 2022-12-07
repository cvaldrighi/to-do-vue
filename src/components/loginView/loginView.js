import axios from "axios"

export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {

            this.login = (await axios.post('http://localhost:8000/api/user/login',
                {
                    username: this.username,
                    password: this.password
                }
            )).data;

            this.username = "";
            this.password = "";

            // document.cookie = `jwt=${this.login.token}`;
            this.$router.push('/');
        }
    }
}