<template>
    <h1>{{ store.title }}</h1>
    <router-view />
</template>

<script setup>
    import { useMainStore } from 'app/store/main'

    const store = useMainStore()
</script>

<style module lang="scss">
</style>

