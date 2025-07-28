<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        requred: true
    }
});

const user = props.user;

</script>

<template>
    <div class="card">
        <router-link :to="{ name: 'userId', params: { id: user.id } }" class="card-header">
            {{ user.name }}
        </router-link>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Username : {{ user.username }}</li>
            <li class="list-group-item">Emaile : {{ user.email }}</li>
            <li class="list-group-item">Phone : {{ user.phone }}</li>
        </ul>
    </div>
</template>

<style scoped></style>