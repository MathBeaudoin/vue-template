<template>
    <Drawer>
        <slot></slot>
        <DrawerContent class="mb-12">
            <VisuallyHidden>
                <DrawerHeader>
                    <!-- TODO: Add title and description for screen reader -->
                    <DrawerTitle></DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
            </VisuallyHidden>
            <Link
                v-for="route in CORE_ROUTES"
                class="mx-auto"
                :route-info="route"
                :is-authenticated="props.isAuthenticated"
            />
        </DrawerContent>
    </Drawer>
</template>

<script setup lang="ts">
import Drawer from "@/components/ui/drawer/Drawer.vue";
import DrawerContent from "@/components/ui/drawer/DrawerContent.vue";
import DrawerTitle from "@/components/ui/drawer/DrawerTitle.vue";
import DrawerDescription from "@/components/ui/drawer/DrawerDescription.vue";
import DrawerHeader from "@/components/ui/drawer/DrawerHeader.vue";
import { VisuallyHidden } from "reka-ui";
import { CORE_ROUTES } from "@/router/routes";
import Link from "@/components/appbar/Link.vue";

const props = defineProps({
    isAuthenticated: {
        required: true,
        type: Boolean,
    },
});
</script>
