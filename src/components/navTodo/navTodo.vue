<template>
    <nav class="navbar navbar-expand-lg navbar-light navbg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><i class="fa fa-seedling"></i> Reminder</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Lists
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="list in resultList" :value="list.id" :key="list.id">
                                <router-link :to="{ name: 'list', params: { id: list.id } }" class="dropdown-item">{{
                                        list.title
                                }}
                                </router-link>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'mng-list' }">Manage Lists
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <h5>today is: {{ currentDate() }}</h5>
            </div>
        </div>
    </nav>
</template>
<script src="./navTodo.js"></script>
<style>
.navbg {
    background-color: #a5a1e6 !important;
}

h5 {
    color: #0000008C;
}
</style>