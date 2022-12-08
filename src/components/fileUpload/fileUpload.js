import axios from "axios";

export default {
    name: 'FileUpload',
    data() {
        return {
            selectedFile: "",
        };
    },
    methods: {
        onFileChange(e) {
            const selectedFile = e.target.files[0]; // accessing file
            this.selectedFile = selectedFile;
        },
        onUploadFile() {
            const id = this.$route.params.id;
            const formData = new FormData();

            formData.append("file", this.selectedFile);
            formData.append("listId", id);


            axios.post("http://localhost:8000/api/upload", formData)
                .then(res => {
                    console.log(res);
                    // window.location.reload();
                })
                .catch(err => {
                    console.log(err);
                }
                );
        }
    }
}