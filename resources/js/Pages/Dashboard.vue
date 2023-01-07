<script setup lang="ts">
import AppLayout from '../Layouts/AppLayout.vue';
import Welcome from '../Components/Welcome.vue';
import {JetstreamInterface, UserInterface} from "../interfaces";

defineProps({
    jetstream: { type: Object as () => JetstreamInterface, required: true },
    user: { type: Object as () => UserInterface, required: false }
});
</script>

<template>
    <AppLayout title="Dashboard" :jetstream="jetstream" :user="user">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <Welcome />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
