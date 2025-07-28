<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CardViewUser from '@/components/users/CardViewUser.vue';

const users = ref([]);
const flagLoader = ref(true);
function getUsers() {
    axios
        .get("https://jsonplaceholder.typicode.com/users").then(function (response) {
            users.value = response.data;
            flagLoader.value = false;
        })
        .catch(function (err) {
            console.log(err);
        });
}
getUsers();
</script>

<template>
    <div class="container mt-5 mb-5">
        <div class="row g-3">
            <div v-if="flagLoader" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div v-else class="col-md-4" v-for="(user, index) in users" :key="index">
                <CardViewUser :user="user" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>