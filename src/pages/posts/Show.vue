<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const post = ref({});
const flagLoader = ref(true);
const route = useRoute();

function getUser() {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`).then(function (response) {
            post.value = response.data;
            flagLoader.value = false;
        })
        .catch(function (err) {
            console.log(err);
        });
}
getUser();
</script>

<template>
    <div v-if="flagLoader" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="col-md-12">
        <div class="card">
            <div class="card-header">
                {{ post.title }}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ post.body }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>