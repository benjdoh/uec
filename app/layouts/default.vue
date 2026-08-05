<script setup lang="ts">
import LogoVertical from "~/assets/logo-vertical.png";
import LogoHorizontal from "~/assets/logo-horizontal.png";

const theatre_cookie = useCookie("uec-theatre");
const select_theatre = reactive({
    filter: "",
    open: false,
});
</script>

<template>
    <nav
        class="flex items-center bg-linear-to-l to-brand-800 via-brand-500 from-brand-800 p-4"
    >
        <a href="/">
            <img :src="LogoHorizontal" alt="logo vertical" class="h-10" />
        </a>

        <span class="grow"></span>

        <UNavigationMenu
            :items="[
                {
                    label: 'Home',
                    icon: 'i-lucide-home',
                    to: '/',
                },
                {
                    label: 'Gift Cards',
                    icon: 'i-lucide-credit-card',
                    to: '/gift-cards',
                },
                {
                    label: 'Loyalty Rewards',
                    icon: 'i-lucide-crown',
                    to: '/loyalty-rewards',
                },
                {
                    label: 'Groups',
                    icon: 'i-lucide-users',
                    to: '/groups',
                },
                {
                    label: 'Contact',
                    icon: 'i-lucide-badge-info',
                    to: '/contact',
                },
            ]"
            :ui="{
                link: 'not-data-active:text-white hover:text-white not-data-active:hover:before:bg-elevated/25 data-active:text-primary',
                linkLeadingIcon:
                    'not-group-data-active:text-white group-hover:text-white group-data-active:text-primary',
            }"
        />
    </nav>

    <main class="p-4">
        <slot />
    </main>

    <UModal
        :open="!theatre_cookie"
        :close="false"
        :ui="{
            content:
                'max-w-3xl h-[calc(var(--spacing)*192)] sm:h-[calc(var(--spacing)*192)]',
            body: 'pt-0 sm:pt-0',
        }"
    >
        <template #body>
            <div class="sticky top-0 z-10 py-4 bg-default">
                <USelect
                    v-model="select_theatre.filter"
                    :items="[
                        'All',
                        ...new Set(THEATRE_LOCATIONS.map((v) => v.state)),
                    ]"
                    placeholder="Filter by state…"
                    :ui="{ base: 'w-full' }"
                />
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 overflow-auto">
                <button
                    v-for="theatre of THEATRE_LOCATIONS.filter((v) =>
                        select_theatre.filter !== 'All' &&
                        select_theatre.filter.length
                            ? select_theatre.filter === v.state
                            : true,
                    )"
                    class="flex flex-col items-start gap-1 bg-muted rounded-lg p-2 transition hover:bg-accented relative"
                    @click="theatre_cookie = theatre.name"
                >
                    <span class="font-semibold py-1">
                        UEC {{ theatre.name }}
                    </span>

                    <img
                        :src="theatre.image"
                        :alt="theatre.name"
                        class="rounded-md"
                    />

                    <span class="grow"></span>

                    <span class="text-muted text-left">
                        {{ theatre.address }}
                    </span>

                    <span class="text-muted text-left text-sm">
                        {{ theatre.city }},
                        {{ theatre.state }}
                    </span>
                </button>
            </div>
        </template>
    </UModal>
</template>
