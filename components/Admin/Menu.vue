<template>
    <q-list padding>
        <q-item
            clickable
            v-for="(item, index) in Menu"
            :key="`menu-item-${index}`"
            :active="isActive(item.link)"
            active-class="tw-bg-brand-primary tw-rounded tw-text-white"
        >
            <q-item-section avatar>
                <q-icon v-if="item.iconType === 'quasar'" :name="item.icon" />
                <AppIcon v-if="item.iconType === 'iconify'" :name="item.icon" />
            </q-item-section>

            <q-item-section>{{ item.label }}</q-item-section>
        </q-item>

        <q-item clickable @click="logout">
            <q-item-section avatar>
                <AppIcon
                    name="solar:logout-2-line-duotone"
                    class="tw-text-xl"
                />
            </q-item-section>

            <q-item-section>Sair</q-item-section>
        </q-item>
    </q-list>
</template>

<script lang="ts" setup>
import Menu from "@/services/adminMenu";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const route = useRoute();

function isActive(path: string) {
    if (route.fullPath === path) {
        return true;
    }

    return false;
}

function logout() {
    authStore.logout();
}
</script>

<style></style>
