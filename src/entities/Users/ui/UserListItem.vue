<template>
    <v-card
        class="mx-auto"
        variant="outlined"
    >
        <v-card-item>
            <div>
                <div class="text-overline mb-1">
                    {{ props.user.firstName }}
                </div>
                <div class="text-h6 mb-1">
                    {{ props.user.lastName }}
                </div>
                <div class="text-caption">
                    {{ props.user.phone }}
                </div>
                <p>{{ props.user.email }}</p>
            </div>
        </v-card-item>

        <v-card-actions>
            <v-btn
                variant="outlined"
                @click="editHandler"
            >
                Edit
            </v-btn>
            <v-btn
                variant="outlined"
                @click="editTodosHandler"
            >
                View todos
            </v-btn>
            <v-btn
                variant="outlined"
                @click="router.push('/PaymentInfo/' + props.user.id)"
            >
                View payments
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
    import { IUserItem } from '../types'
    import { useRouter } from 'vue-router'
    import { inject } from 'vue'
    import { openModifyUserDialogKey, openViewUserTodosDialogKey } from 'pages/injectedKeys/Users'

    const router = useRouter()

    const props = withDefaults(
        defineProps<{
            user: IUserItem
        }>(), {}
    )

    const openModifyUserDialog = inject(openModifyUserDialogKey)
    const openViewUserTodosDialog = inject(openViewUserTodosDialogKey)

    function editHandler() {
        if (openModifyUserDialog) openModifyUserDialog({ ...props.user })
    }

    function editTodosHandler() {
        if (openViewUserTodosDialog) openViewUserTodosDialog(props.user)
    }
</script>

<style module lang="scss">
</style>

