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

        <v-card-actions v-if="showActions">
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
                v-if="!props.user.payments || props.user.payments?.length"
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
            showActions?: boolean
        }>(), {
            showActions: false
        }
    )

    /**
     * two variables referring to the implemented functions should be defined only if the block with buttons is displayed in the user card
     */
    const openModifyUserDialog = props.showActions ? inject(openModifyUserDialogKey) : undefined // the injected function for displaying modify user dialog
    const openViewUserTodosDialog = props.showActions ? inject(openViewUserTodosDialogKey) : undefined // the injected function for displaying user todos in a dialog

    /**
     * handler for the user data editing button click event
     */
    function editHandler() {
        if (openModifyUserDialog) openModifyUserDialog({ ...props.user })
    }

    /**
     * handler for the user todos editing button click event
     */
    function editTodosHandler() {
        if (openViewUserTodosDialog) openViewUserTodosDialog(props.user)
    }
</script>

<style module lang="scss">
</style>

