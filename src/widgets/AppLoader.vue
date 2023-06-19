<template>
    <div :class="$style.loaderWrapper">
        <v-progress-circular
            :size="70"
            :width="7"
            color="purple"
            indeterminate
        />
    </div>
</template>

<style module lang="scss">
.loaderWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
