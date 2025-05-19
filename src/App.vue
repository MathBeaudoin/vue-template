<template>
    <router-view :key="currentRoute.fullPath"/>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useUserSessionStore } from "@stores/user/userSessionStore";
import { storeToRefs } from "pinia";
import { HeadSelector } from "@/router/headSelector.ts";
import { useHead } from "@unhead/vue";

const currentRoute = useRoute();
const userSessionStore = useUserSessionStore();

const { theme, locale } = storeToRefs(userSessionStore);

useHead(() => {
    const headSelector = new HeadSelector();
    return headSelector.select(currentRoute.name);
});

</script>
