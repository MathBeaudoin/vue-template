<template>
    <header class="shadow">
        <div class="appbar-container">
            <nav class="appbar-navigation">
                <router-link 
                    class="appbar-item appbar-title"
                    :to="{ name: ROUTES.home.name }" 
                >
                    App Name
                </router-link>

                <router-link
                    v-if="!isAuthenticated"
                    :to="{ name: ROUTES['not-found'].name }"
                    class="appbar-item appbar-item-text"
                >
                    Dashboard
                </router-link>
            </nav>

            <nav class="appbar-util">
                <router-link 
                    class="appbar-item appbar-title"
                    :to="{ name: ROUTES.home.name }" 
                >
                    App Name
                </router-link>

                <router-link
                    v-if="!isAuthenticated"
                    :to="{ name: ROUTES['not-found'].name }"
                    class="appbar-item appbar-item-text"
                >
                    Dashboard
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useUserSessionStore } from "@stores/user/userSessionStore";
import { computed } from "vue";
import { ROUTES } from "@router/routes";

const userSessionStore = useUserSessionStore();
const isAuthenticated = computed(() => userSessionStore.isAuthenticated());

</script>
