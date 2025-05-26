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
import { LanguageService } from "@/services/i18n/languageService";
import { onMounted, ref } from "vue";
import AppBar from "@/components/appbar/AppBar.vue";
import { SUPPORTED_LANGUAGES } from "./services/i18n/constants";

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
    // TODO: Is it needed?
    LanguageService.selectLanguage(SUPPORTED_LANGUAGES[locale.value]);

    userSessionStore.refreshSession();

    // Finish loading page
    finishedAuthentication.value = true;
});
</script>
