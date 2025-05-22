<template>
    <DrawerClose data-slot="drawer-close" v-bind="props">
        <slot></slot>
    </DrawerClose>
</template>

<script setup lang="ts">
import type { DrawerCloseProps } from "vaul-vue";
import { DrawerClose } from "vaul-vue";

const props = defineProps<DrawerCloseProps>();
</script>
