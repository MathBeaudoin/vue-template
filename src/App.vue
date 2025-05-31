<template>
    <AppBar />

    <router-view v-if="finishedAuthentication" :key="currentRoute.fullPath" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useUserSessionStore } from "@/stores/user/userSessionStore";
import { HeadSelector } from "@/services/routing/headSelector";
import { useHead } from "@unhead/vue";
import { onMounted, ref } from "vue";
import AppBar from "@/components/appbar/AppBar.vue";

const currentRoute = useRoute();
const userSessionStore = useUserSessionStore();

const finishedAuthentication = ref<Boolean>(false);

useHead(() => {
    const headSelector = new HeadSelector();
    const head = headSelector.select(currentRoute.name);
    return headSelector.translate(head);
});

onMounted(() => {
    // Refresh session to make sure user parameters are OK
    userSessionStore.refreshSession();

    // Finish loading page
    finishedAuthentication.value = true;
});
</script>
