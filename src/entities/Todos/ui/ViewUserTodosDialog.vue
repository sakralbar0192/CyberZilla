<template>
    <v-dialog
        v-model="dialog"
        persistent
        width="500"
        class="$styles.dialog"
    >
        <v-card>
            <v-card-item>
                <p v-if="usersStore.isTodosLoadedError">
                    {{ usersStore.todosLoadedErrorMessage }}
                </p>
                <div v-else-if="usersStore.isTodosLoading">
                    <AppLoader />
                </div>
                <div v-else-if="todos">
                    <div
                        v-if="todos.length"
                    >
                        <TodoList :todos="todos" />
                    </div>

                    <p v-else>
                        {{ NOTHING_TO_DISPLAY_MESSAGE }}
                    </p>
                </div>

                <p v-else>
                    {{ DEFAULT_ERROR_MESSAGE }}
                </p>
            </v-card-item>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    color="primary"
                    @click="closeDialog"
                >
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { IUserItem } from 'entities/Users/types'
    import { useUsersStore } from 'app/store/users'
    import { onMounted } from 'vue'
    import { DEFAULT_ERROR_MESSAGE, NOTHING_TO_DISPLAY_MESSAGE } from 'shared/const'
    import AppLoader from 'widgets/AppLoader.vue'
    import TodoList from './TodoList.vue'

    const usersStore = useUsersStore()

    const props = withDefaults(
        defineProps<{
            visible: boolean
            user: IUserItem
        }>(), {
            visible: false
        }
    )

    const emit = defineEmits<{
        (e: 'update:visible', value: boolean): void
        (e: 'update:user', value: IUserItem | undefined): void,
    }>()

    const dialog = computed(() => props.visible ) //the intermediary variable for the boolean value of dialog visibility
    const todos = computed(() => props.user.todos) //intermediate variable for storing an array of user tasks

    onMounted(() => {
        if (!props.user.todos) {
            usersStore.fetchUserTodos(props.user.id)
        }
    })

    /**
     * hides the dialog and resets the value of the active user
     */
    function closeDialog() {
        emit('update:visible', false)
        emit('update:user', undefined)
    }

</script>

<style module lang="scss">
    .dialog {
        padding: 10px;
    }
</style>
