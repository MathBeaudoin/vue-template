<template>
    <header class="shadow">
        <div class="appbar-container">
            <nav class="appbar-items">
                <router-link class="appbar-item appbar-item-title" :to="{ name: ROUTES.home.name }">
                    App Name
                </router-link>

                <router-link
                    v-if="!isAuthenticated"
                    :to="{ name: ROUTES['not-found'].name }"
                    class="appbar-item appbar-item-text"
                >
                    Dashboard
                </router-link>

                <router-link
                    v-if="!isAuthenticated"
                    :to="{ name: ROUTES['not-found'].name }"
                    class="appbar-item appbar-item-text"
                >
                    Dashboard
                </router-link>

                <router-link
                    v-if="!isAuthenticated"
                    :to="{ name: ROUTES['not-found'].name }"
                    class="appbar-item appbar-item-text"
                >
                    Dashboard
                </router-link>
            </nav>

            <nav class="appbar-utils">
                <router-link :to="{ name: ROUTES.home.name }" class="appbar-util">
                    <HomeIcon class="appbar-util-icon" />
                </router-link>

                <router-link :to="{ name: ROUTES.home.name }" class="appbar-util">
                    <HomeIcon class="appbar-util-icon" />
                </router-link>

                <router-link :to="{ name: ROUTES.home.name }" class="appbar-util">
                    <HomeIcon class="appbar-util-icon" />
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useUserSessionStore } from "@stores/user/userSessionStore";
import { computed } from "vue";
import { ROUTES } from "@router/routes";
import { HomeIcon } from "@heroicons/vue/24/outline";

const userSessionStore = useUserSessionStore();
const isAuthenticated = computed(() => userSessionStore.isAuthenticated());
</script>
