<template>
    <section
        v-title="{title: 'Users list'}"
    >
        <div v-if="usersStore.users">
            <div
                v-if="usersStore.users.length"
                :class="$style.userListWapper"
            >
                <UsersList
                    :users="usersStore.users"
                />
            </div>

            <p v-else>
                {{ NOTHING_TO_DISPLAY_MESSAGE }}
            </p>
        </div>
        <p v-else-if="usersStore.isUsersLoadedError">
            {{ usersStore.usersLoadedErrorMessage }}
        </p>
        <div v-else-if="usersStore.isUsersLoading">
            <AppLoader />
        </div>
        <p v-else>
            {{ DEFAULT_ERROR_MESSAGE }}
        </p>
    </section>
</template>

<script setup>
    import { useUsersStore } from 'app/store/users'
    import { onMounted } from 'vue'
    import UsersList from 'entities/Users/ui/UsersList.vue'
    import AppLoader from 'widgets/AppLoader.vue'
    import { DEFAULT_ERROR_MESSAGE, NOTHING_TO_DISPLAY_MESSAGE } from 'shared/const'

    const usersStore = useUsersStore()

    onMounted(() => {
        if (!usersStore.users) {
            usersStore.fetchUsers()
        }
    })
</script>

<style module lang="scss">
    .userListWapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

