<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CardViewUser from '@/components/users/CardViewUser.vue';
import { useRoute } from 'vue-router';

const user = ref({});
const flagLoader = ref(true);
const route = useRoute();

function getUser() {
    axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`).then(function (response) {
            user.value = response.data;
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
    <div v-else class="col-md-4">
        <CardViewUser :user="user" />
    </div>
</template>

<style scoped></style>