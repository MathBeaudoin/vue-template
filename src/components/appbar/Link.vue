<template>
    HANDLE AUTH
    <router-link
        v-if="props.routeInfo.name"
        v-bind="$attrs"
        :to="{ name: props.routeInfo.name }"
        class="appbar-link"
        :class="{
            'appbar-link-on-current-page': currentRoute.name == props.routeInfo.name,
            'appbar-link-not-on-current-page': currentRoute.name != props.routeInfo.name,
        }"
    >
        {{ props.routeInfo.displayedName }}
    </router-link>
</template>

<script setup lang="ts">
import type { RouteInfo } from "@router/types";
import type { PropType } from "vue";
import { useRoute } from "vue-router";

const currentRoute = useRoute();

const props = defineProps({
    routeInfo: {
        required: true,
        type: Object as PropType<RouteInfo>,
    },
    isAuthenticated: {
        required: true,
        type: Boolean,
    },
});
</script>
