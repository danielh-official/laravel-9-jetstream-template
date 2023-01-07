<script setup lang="ts">
import AppLayout from '../../Layouts/AppLayout.vue';
import CreateTeamForm from '../../Pages/Teams/Partials/CreateTeamForm.vue';
import {JetstreamInterface, UserInterface} from "../../interfaces";

defineProps({
    jetstream: {type: Object as () => JetstreamInterface, required: true},
    user: {type: Object as () => UserInterface, required: false}
});
</script>

<template>
    <AppLayout title="Create Team" :jetstream="jetstream" :user="user">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create Team
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <CreateTeamForm :jetstream="jetstream" :user="user"/>
            </div>
        </div>
    </AppLayout>
</template>
