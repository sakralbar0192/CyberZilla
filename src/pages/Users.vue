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
                    @modify-user="openModifyUserDialog"
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
        ref="modifyUserDialog"
        v-model:visible="modifyUserDialogVisible"
        v-model:user="modifiedUserRef"
        @modify-user="modifyUser"
    />
    <ViewUserTodosDialog
        v-if="modifiedUserRef"
        v-model:visible="viewUserTodosDialogVisible"
        v-model:user="modifiedUserRef"
    />
</template>

<script setup lang="ts">
    import { useUsersStore } from 'app/store/users'
    import { onMounted } from 'vue'
    import UsersList from 'entities/Users/ui/UsersList.vue'
    import AppLoader from 'widgets/AppLoader.vue'
    import ModifyUserDialog from 'entities/Users/ui/ModifyUserDialog.vue'
    import ViewUserTodosDialog from 'entities/Todos/ui/ViewUserTodosDialog.vue'
    import { DEFAULT_ERROR_MESSAGE, NOTHING_TO_DISPLAY_MESSAGE } from 'shared/const'
    import { ref } from 'vue'
    import { IUserItem } from 'entities/Users/types'
    import { Ref } from 'vue'
    import { provide } from 'vue'
    import { openModifyUserDialogKey, openViewUserTodosDialogKey, modifyUserKey } from './injectedKeys/Users'

    const usersStore = useUsersStore()

    onMounted(() => {
        if (!usersStore.users) {
            usersStore.fetchUsers()
        }
    })

    const modifyUserDialogVisible = ref(false) //a variable that stores the modify user dialog visibility value
    const viewUserTodosDialogVisible = ref(false) // a variable that stores the user todos info dialog visibility value

    const modifiedUserRef: Ref<IUserItem | undefined> = ref() // //a variable that stores the displayed in payments info dialog payments

    /**
     * shows a modify user dialog and determines the modified user
     *
     * @param modifiedUser - modified user
     */
    function openModifyUserDialog(modifiedUser: IUserItem) {
        modifiedUserRef.value = modifiedUser
        modifyUserDialogVisible.value = true
    }

    /**
     * shows a user todos dialog and determines the modified user
     *
     * @param modifiedUser -  - modified user
     */
    function openViewUserTodosDialog(modifiedUser: IUserItem) {
        modifiedUserRef.value = modifiedUser
        viewUserTodosDialogVisible.value = true
    }

    /**
     *  modifies an existing user instance
     *
     * @param modifiedUser -modified user
     */
    function modifyUser(modifiedUser: IUserItem | undefined = modifiedUserRef.value) {
        if (modifiedUser) {
            usersStore.modifyUser(modifiedUser)
        }
    }

    /**
     * allows child elements to access a functions by keys
     */
    provide(openModifyUserDialogKey, openModifyUserDialog)
    provide(openViewUserTodosDialogKey, openViewUserTodosDialog)
    provide(modifyUserKey, modifyUser)
</script>

<style module lang="scss">
    .userListWapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

