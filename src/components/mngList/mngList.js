import axios from "axios";
export default {
    name: 'mngList',
    data() {
        return {
            title: '',
            statusTitle: '',
            tagTitle: '',
            tagColor: '',
            resultList: []
        }
    },
    mounted() {
        this.getLists();
        this.modalTags();
        this.modalStatus();
    },
    methods: {
        //api
        async getLists() {
            this.resultList = (await axios.get('http://localhost:8000/api/lists')).data;
            console.log(this.resultList);
        },

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

        async deleteList(id) {
            try {
                await axios.delete(`http://localhost:8000/api/lists/${id}`);
            } catch (err) {
                console.log(err);
            }
            this.getLists();
        },

        async createStatus() {
            let id = document.getElementById('status-list-id').innerHTML;

            this.newStatus = (await axios.post('http://localhost:8000/api/status',
                {
                    title: this.statusTitle,
                    listId: parseInt(id)
                }
            )).data;
            this.statusTitle = "";
            console.log("Created new status:", this.newStatus);
        },

        async createTags() {
            let id = document.getElementById('tag-list-id').innerHTML;

            this.newTag = (await axios.post('http://localhost:8000/api/tags',
                {
                    title: this.tagTitle,
                    color: this.tagColor,
                    listId: parseInt(id)
                }
            )).data;
            this.tagTitle = "";
            console.log("Created new tag:", this.newTag);
        },

        //modals
        modalTags: function () {
            let modal = document.getElementById('modalTags');
            modal.addEventListener('show.bs.modal', function (event) {

                let button = event.relatedTarget
                let listId = button.getAttribute('data-bs-whatever')
                let modalId = modal.querySelector('.tag-list-id')
                modalId.textContent = listId;
            })
        },

        modalStatus: function () {
            let modal = document.getElementById('modalStatus');
            modal.addEventListener('show.bs.modal', function (event) {

                let button = event.relatedTarget
                let listId = button.getAttribute('data-bs-whatever')
                let modalId = modal.querySelector('.status-list-id')
                modalId.textContent = listId;
            })
        },

        //helpers
        selectColor(e) {
            let color = e.target.style.color;
            this.tagColor = color;

            if (!e.target.style.border) {
                e.target.style.border = "1px solid black"
            }

            console.log(this.tagColor);
        },

    }
}