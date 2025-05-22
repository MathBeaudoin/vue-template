<template>
    <router-link
        v-bind="$attrs"
        :to="{ name: props.routeName }"
        class="appbar-link"
        :class="{
            'appbar-link-on-current-page': currentRoute.name == props.routeName,
            'appbar-link-not-on-current-page': currentRoute.name != props.routeName,
        }"
    >
        {{ props.displayedText }}
    </router-link>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const currentRoute = useRoute();

const props = defineProps({
    displayedText: {
        required: true,
        type: String,
    },
    routeName: {
        required: true,
        type: String,
    },
});
</script>
