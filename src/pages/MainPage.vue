<template>
    <div :class="$style.appWrapper">
        <h1>{{ store.title }}</h1>
        <router-view />
    </div>
</template>

<script setup>
    import { useMainStore } from 'app/store/main'

    const store = useMainStore()
</script>

<style module lang="scss">
    .appWrapper {
        padding: 10px;
    }
</style>

