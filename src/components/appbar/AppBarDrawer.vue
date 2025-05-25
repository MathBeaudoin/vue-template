<template>
    <Drawer>
        <slot></slot>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle></DrawerTitle>
                <DrawerDescription></DrawerDescription>
            </DrawerHeader>
        </DrawerContent>
    </Drawer>
</template>

<script setup lang="ts">
import Drawer from "@/components/ui/drawer/Drawer.vue";
import DrawerContent from "@/components/ui/drawer/DrawerContent.vue";
import DrawerTitle from "@/components/ui/drawer/DrawerTitle.vue";
import DrawerDescription from "@/components/ui/drawer/DrawerDescription.vue";
import DrawerHeader from "@/components/ui/drawer/DrawerHeader.vue";
</script>
