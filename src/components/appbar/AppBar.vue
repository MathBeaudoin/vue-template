<template>
    <header class="header">
        <div class="appbar-container">
            <nav class="appbar-main">
                <SecondaryItemIcon id="hamburger" class="md:hidden" @click="" :icon="Bars3Icon" />

                <SiteTitle displayed-text="App Name" :route-name="ROUTES.home.name" />
            </nav>

            <nav class="appbar-links">
                <Link displayed-text="Dashboard" :route-name="ROUTES.not_found.name" />

                <Link displayed-text="About" :route-name="ROUTES.not_found.name" />

                <Link
                    v-if="isAuthenticated"
                    displayed-text="Authenticated Dashboard"
                    :route-name="ROUTES.not_found.name"
                />
            </nav>

            <nav class="appbar-secondary-items">
                <SecondaryItemLink :icon="UserIcon" :route-name="ROUTES.not_found.name" />

                <SecondaryItemIcon @click="userSessionStore.changeTheme" :icon="themeIcon" />

                <SecondaryItemIcon @click="" :icon="Cog8ToothIcon" />
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useUserSessionStore } from "@stores/user/userSessionStore";
import { computed } from "vue";
import { ROUTES } from "@router/routes";
import { Cog8ToothIcon } from "@heroicons/vue/24/outline";
import { MoonIcon } from "@heroicons/vue/24/outline";
import { SunIcon } from "@heroicons/vue/24/outline";
import { UserIcon } from "@heroicons/vue/24/outline";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import Link from "@components/appbar/Link.vue";
import SiteTitle from "@components/appbar/SiteTitle.vue";
import SecondaryItemIcon from "@components/appbar/SecondaryItemIcon.vue";
import SecondaryItemLink from "@components/appbar/SecondaryItemLink.vue";

const userSessionStore = useUserSessionStore();

const isAuthenticated = computed(() => userSessionStore.isAuthenticated());
const isDarkTheme = computed(() => userSessionStore.isDarkTheme());
const themeIcon = computed(() => (isDarkTheme.value ? SunIcon : MoonIcon));
</script>
