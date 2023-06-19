<template>
    <div :class="$style.appWrapper">
        <div>
            <a href="https://sakralbar0192.github.io/MitraSoftTest/#/">Other apps</a>
        </div>
        <div>
            <a href="https://github.com/sakralbar0192/CyberZilla">Source code</a>
        </div>
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

