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
                    @modify-user="modifyUserHandler"
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
    <ModifyUserDialog
        v-if="modifiedUserRef"
        v-model:visible="modifyUserModalVisible"
        :user="modifiedUserRef"
        @modify-user-success="modifyUserSuccessHandler"
    />
</template>

<script setup lang="ts">
    import { useUsersStore } from 'app/store/users'
    import { onMounted } from 'vue'
    import UsersList from 'entities/Users/ui/UsersList.vue'
    import AppLoader from 'widgets/AppLoader.vue'
    import ModifyUserDialog from 'entities/Users/ui/ModifyUserDialog.vue'
    import { DEFAULT_ERROR_MESSAGE, NOTHING_TO_DISPLAY_MESSAGE } from 'shared/const'
    import { ref } from 'vue'
    import { IUserItem } from 'entities/Users/types'
    import { Ref } from 'vue'

    const usersStore = useUsersStore()

    onMounted(() => {
        if (!usersStore.users) {
            usersStore.fetchUsers()
        }
    })

    const modifyUserModalVisible = ref(false)
    const modifiedUserRef:Ref<IUserItem | undefined> = ref()

    function modifyUserHandler(modifiedUser: IUserItem) {
        modifiedUserRef.value = modifiedUser
        modifyUserModalVisible.value = true
    }

    function modifyUserSuccessHandler(modifiedUser: IUserItem) {
        modifyUserModalVisible.value = false
        modifiedUserRef.value = undefined
        usersStore.modifyUser(modifiedUser)
    }
</script>

<style module lang="scss">
    .userListWapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

