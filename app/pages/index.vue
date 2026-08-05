<script setup lang="ts">
const { data: site_data } = useFetch<SiteDataRoot>("/api/theatre");
</script>

<template>
    <div class="container mx-auto flex">
        <UCarousel
            v-slot="{ item }"
            loop
            :items="site_data?.slides || []"
            :ui="{
                root: `grow w-1024 bg-black rounded-lg`,
                item: 'relative',
                container: 'items-center rounded-lg',
            }"
        >
            <img
                :src="item.file"
                :alt="item.alt"
                class="absolute min-h-512 h-auto w-auto blur-[50rem] -translate-1/2 left-1/2 top-1/2 -z-1 opacity-50"
                loading="lazy"
            />

            <img
                :src="item.file"
                :alt="item.alt"
                class="rounded-lg w-full"
                loading="lazy"
            />
        </UCarousel>

        <div class="w-512">w</div>
    </div>
</template>
