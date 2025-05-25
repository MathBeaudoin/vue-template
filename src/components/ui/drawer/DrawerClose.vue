<template>
    <!-- DEFAULT COMPONENT LOOK 
    <DrawerClose data-slot="drawer-close" v-bind="props">
        <slot></slot>
    </DrawerClose> 
    -->

    <DrawerClose data-slot="drawer-close" v-bind="props">
        <XMarkIcon class="close-drawer-icon"/>
    </DrawerClose> 
</template>

<script setup lang="ts">
import type { DrawerCloseProps } from "vaul-vue";
import { DrawerClose } from "vaul-vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps<DrawerCloseProps>();
</script>
