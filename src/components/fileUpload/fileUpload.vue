<template>
    <div>
        <div class="file-upload">
            <input type="file" @change="onFileChange" />
            <button @click="onUploadFile" class="upload-button" :disabled="!this.selectedFile">Upload file</button>
        </div>
    </div>
</template>
<script src="./fileUpload.js">

</script>
<style>

</style>