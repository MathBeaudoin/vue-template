<template>
    <AppBar />

    <router-view v-if="finishedAuthentication" :key="currentRoute.fullPath" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useUserSessionStore } from "@/stores/user/userSessionStore";
import { storeToRefs } from "pinia";
import { HeadSelector } from "@/router/headSelector.ts";
import { useHead } from "@unhead/vue";
import { i18n } from "@/i18n/i18n";
import { onMounted, ref } from "vue";
import AppBar from "@/components/appbar/AppBar.vue";

const currentRoute = useRoute();
const userSessionStore = useUserSessionStore();

const { locale /*theme*/ } = storeToRefs(userSessionStore);
const finishedAuthentication = ref<Boolean>(false);

useHead(() => {
    const headSelector = new HeadSelector();
    const head = headSelector.select(currentRoute.name);
    return headSelector.translate(head);
});

onMounted(() => {
    // Do everything needed on app load
    i18n.global.locale.value = locale.value;

    userSessionStore.refreshSession();

    // Finish loading page
    finishedAuthentication.value = true;
});
</script>
