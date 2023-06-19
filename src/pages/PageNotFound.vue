<template>
    <div :class="$style.wrapper">
        <v-btn
            variant="outlined"
            @click="router.back()"
        >
            Back to user list
        </v-btn>
        <p :class="$style.text">
            There is no such page
        </p>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()
</script>

<style module lang="scss">
    .wrapper {
        padding: 10px;
    }
    .text {
        margin: 10px;
        text-align: center;
        font-weight: bold;
    }
</style>

