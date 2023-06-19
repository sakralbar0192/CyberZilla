import { getUserTodos } from 'entities/Todos/api/getUserTodos'
import { getAllUsers } from 'entities/Users/api/getAllUsers'
import { getUserById } from 'entities/Users/api/getUserById'
import { IUserItem } from 'entities/Users/types'
import { defineStore } from 'pinia'
import { REQUEST_FAILED_MESSAGE } from 'shared/const'
import { ref, Ref } from 'vue'

interface IInitialState {
    users: Ref<IUserItem[] | undefined>
    isUsersLoading: Ref<boolean>
    isUsersLoadedError: Ref<boolean>
    usersLoadedErrorMessage: Ref<string>
    fetchUsers: () => void
    fetchUser: (id: number) => void

    activeUser: Ref<IUserItem | undefined>
    isUserLoading: Ref<boolean>
    isUserLoadedError: Ref<boolean>
    userLoadedErrorMessage: Ref<string>
    setActiveUser: (id: number) => void

    modifyUser: (modifiedUser: IUserItem) => void

    isTodosLoading: Ref<boolean>
    isTodosLoadedError: Ref<boolean>
    todosLoadedErrorMessage: Ref<string>
    fetchUserTodos: (id: number) => void
}

export const useUsersStore = defineStore('users', (): IInitialState => {
    const users: Ref<IUserItem[] | undefined> = ref(undefined)
    const isUsersLoading = ref(false)
    const isUsersLoadedError = ref(false)
    const usersLoadedErrorMessage = ref('')

    const activeUser: Ref<IUserItem | undefined> = ref(undefined)
    const isUserLoading = ref(false)
    const isUserLoadedError = ref(false)
    const userLoadedErrorMessage = ref('')

    const isTodosLoading = ref(false)
    const isTodosLoadedError = ref(false)
    const todosLoadedErrorMessage = ref('')

    async function fetchUsers() {
        isUsersLoading.value = true
        const response = await getAllUsers()

        if (response.isSucceeded) {
            setUsers(response.data)
        } else {
            setUsers(undefined)
            isUsersLoadedError.value = true
            usersLoadedErrorMessage.value = response.message || REQUEST_FAILED_MESSAGE
        }

        isUsersLoading.value = false
    }

    async function fetchUser(id: number) {
        isUserLoading.value = true
        const response = await getUserById(id)

        if (!response.isSucceeded) {
            isUserLoadedError.value = true
            userLoadedErrorMessage.value = response.message || REQUEST_FAILED_MESSAGE
        }

        isUserLoading.value = false
        return response.data
    }

    function setUsers(newUsers: IUserItem[] | undefined) {
        users.value = newUsers
    }

    async function setActiveUser(id: number) {
        if (users.value) {
            const newActiveUser = users.value.find(user => user.id === id)
            activeUser.value = newActiveUser
        } else {
            activeUser.value = await fetchUser(id)
        }
    }

    function modifyUser(modifiedUser: IUserItem) {
        if (users.value) {
            const newUsers = [...users.value]
            const modifiedUserIndex = newUsers.findIndex(user => user.id === modifiedUser.id)
            newUsers[modifiedUserIndex] = modifiedUser
            users.value = newUsers
        }
    }

    async function fetchUserTodos(id: number) {
        isTodosLoading.value = true
        const response = await getUserTodos(id)

        if (!response.isSucceeded) {
            isTodosLoadedError.value = true
            todosLoadedErrorMessage.value = response.message || REQUEST_FAILED_MESSAGE
        }

        if (users.value) {
            const modifiedUser = users.value.find(user => user.id === id)

            if (modifiedUser && users.value) {
                modifiedUser.todos = response.data
                modifyUser({ ...modifiedUser })
            }
        }

        isTodosLoading.value = false
    }

    return {
        users,
        isUsersLoading,
        isUsersLoadedError,
        usersLoadedErrorMessage,
        fetchUsers,
        fetchUser,

        activeUser,
        isUserLoading,
        isUserLoadedError,
        userLoadedErrorMessage,
        setActiveUser,

        modifyUser,

        isTodosLoading,
        isTodosLoadedError,
        todosLoadedErrorMessage,
        fetchUserTodos,
    }
})
