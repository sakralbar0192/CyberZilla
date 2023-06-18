<template>
    <section v-title="{title: 'User payment info'}">
        <div v-if="usersStore.activeUser">
            <UserCard :user="usersStore.activeUser" />
        </div>
        <p v-else-if="usersStore.isUserLoadedError">
            {{ usersStore.userLoadedErrorMessage }}
        </p>
        <div v-else-if="usersStore.isUserLoading">
            <AppLoader />
        </div>
        <p v-else>
            {{ DEFAULT_ERROR_MESSAGE }}
        </p>
        <router-link to="/">
            Go home
        </router-link>
    </section>
</template>

<script setup>
    import { useUsersStore } from 'app/store/users'
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import UserCard from 'entities/Users/ui/UserCard.vue'
    import AppLoader from 'widgets/AppLoader.vue'

    const usersStore = useUsersStore()
    const route = useRoute()
    const id = Number(route.params.id)

    onMounted(() => {
        usersStore.setActiveUser(id)
    })
</script>
<style module lang="scss"></style>
