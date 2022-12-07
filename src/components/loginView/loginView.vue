<template>
    <div class="container login">
        <div class="row">

            <div class="col-6">
                <h1 class="title">Login</h1>
                <div class="mt-4">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" placeholder="username" class="form-control" id="username" v-model="username">
                </div>
                <div class="mt-4">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" placeholder="password" class="form-control" id="password" v-model="password">
                </div>
                <button class="btn btn-login mt-4" @click="login">Submit</button>
            </div>
            <div class="col-6 img">
                <img src="../../assets/undraw_secure_login_pdn4.svg" />
            </div>
        </div>

    </div>
</template>
<script src="./loginView.js"></script>
<style>
body {
    background-color: #b5b4c7;
}

.login {
    padding-top: 7rem;
}

.img {
    display: flex;
    justify-content: flex-end;
}

.title {
    color: #6C63FF;
    font-size: 5rem;
}

.btn-login {
    background-color: #6C63FF;
    color: white;
}
</style>