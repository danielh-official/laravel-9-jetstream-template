<script setup lang="ts">
import AppLayout from '../../Layouts/AppLayout.vue';
import DeleteTeamForm from '../../Pages/Teams/Partials/DeleteTeamForm.vue';
import SectionBorder from '../../Components/SectionBorder.vue';
import TeamMemberManager from '../../Pages/Teams/Partials/TeamMemberManager.vue';
import UpdateTeamNameForm from '../../Pages/Teams/Partials/UpdateTeamNameForm.vue';
import {JetstreamInterface, UserInterface} from "../../interfaces";

defineProps({
    team: Object as () => {
        personal_team: object
    },
    availableRoles: Array,
    permissions: Object as () => {
        canDeleteTeam: boolean
    },
    jetstream: {type: Object as () => JetstreamInterface, required: true},
    user: {type: Object as () => UserInterface, required: false}
});
</script>

<template>
    <AppLayout title="Team Settings" :user="user" :jetstream="jetstream">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Team Settings
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <UpdateTeamNameForm :team="team" :permissions="permissions"/>

                <TeamMemberManager
                    class="mt-10 sm:mt-0"
                    :team="team"
                    :available-roles="availableRoles"
                    :user-permissions="permissions"
                    :jetstream="jetstream"
                    :user="user"
                />

                <template v-if="permissions.canDeleteTeam && ! team.personal_team">
                    <SectionBorder/>

                    <DeleteTeamForm class="mt-10 sm:mt-0" :team="team"/>
                </template>
            </div>
        </div>
    </AppLayout>
</template>
