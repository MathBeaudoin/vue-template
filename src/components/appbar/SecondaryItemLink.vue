<template>
    <button v-bind="$attrs">
        <router-link v-if="icon" :to="{ name: props.routeName }">
            <SecondaryItemIcon :icon="icon" />
        </router-link>

        <Link v-else-if="displayedText" :displayed-text="displayedText" :route-name="routeName" />

        <slot v-else></slot>
    </button>
</template>

<script setup lang="ts">
import Link from "@components/appbar/Link.vue";
import SecondaryItemIcon from "@components/appbar/SecondaryItemIcon.vue";

const props = defineProps({
    icon: {
        required: false,
        type: Function,
    },
    routeName: {
        required: true,
        type: String,
    },
    displayedText: {
        required: false,
        type: String,
    },
});
</script>
