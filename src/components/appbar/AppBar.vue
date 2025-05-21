<template>
    <header class="shadow">
        <div class="appbar-container">
            <nav class="appbar-links">
                <router-link class="appbar-item appbar-link-site-title" :to="{ name: ROUTES.home.name }">
                    App Name
                </router-link>

                <router-link
                    v-if="!isAuthenticated"
                    :to="{ name: ROUTES.not_found.name }"
                    class="appbar-link appbar-link-default"
                >
                    Dashboard
                </router-link>

                <router-link
                    v-if="!isAuthenticated"
                    :to="{ name: ROUTES.not_found.name }"
                    class="appbar-link appbar-link-default"
                >
                    Dashboard
                </router-link>

                <router-link
                    v-if="!isAuthenticated"
                    :to="{ name: ROUTES.not_found.name }"
                    class="appbar-item appbar-link-default"
                >
                    Dashboard
                </router-link>
            </nav>

            <nav class="appbar-secondary-items">
                <router-link :to="{ name: ROUTES.not_found.name }" class="appbar-secondary-item appbar-secondary-item-clickable">
                    <UserIcon class="appbar-secondary-item-icon" />
                </router-link>

                <button @click="userSessionStore.changeTheme" class="appbar-secondary-item appbar-secondary-item-clickable">
                    <SunIcon v-if="isDarkTheme" class="appbar-secondary-item-icon" /> 
                    <MoonIcon v-else class="appbar-secondary-item-icon" />
                </button>

                <button @click="" class="appbar-secondary-item appbar-secondary-item-clickable">
                    <Cog8ToothIcon class="appbar-secondary-item-icon" />
                </button>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useUserSessionStore } from "@stores/user/userSessionStore";
import { computed } from "vue";
import { ROUTES } from "@router/routes";
import { HomeIcon } from "@heroicons/vue/24/outline";
import { Cog8ToothIcon } from "@heroicons/vue/24/outline";
import { MoonIcon } from "@heroicons/vue/24/outline";
import { SunIcon } from "@heroicons/vue/24/outline";
import { UserIcon } from "@heroicons/vue/24/outline";

const userSessionStore = useUserSessionStore();
const isAuthenticated = computed(() => userSessionStore.isAuthenticated());
const isDarkTheme = computed(() => userSessionStore.isDarkTheme());
</script>
