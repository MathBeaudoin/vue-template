<template>
    <router-link v-bind="$attrs" class="appbar-link appbar-link-default" :to="{ name: props.routeName }">
        {{ props.displayedText }}
    </router-link>
</template>

<script setup lang="ts">
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
