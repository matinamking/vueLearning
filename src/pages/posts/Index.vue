<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const posts = ref([]);
const flagLoader = ref(true);
const route = useRoute();

function getPosts() {
    axios
        .get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
            posts.value = response.data;
            flagLoader.value = false;
        })
        .catch(function (err) {
            console.log(err);
        });
}
getPosts();
</script>

<template>
    <div v-if="flagLoader" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="col-md-4" v-for="(post, index) in posts" :key="index">
        <div class="card">
            <router-link :to="{ name: 'postId', params: { id: post.id } }" class="card-header">
                {{ post.title }}
            </router-link>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ post.body }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>