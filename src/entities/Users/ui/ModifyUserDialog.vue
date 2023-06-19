<template>
    <v-dialog
        v-model="dialog"
        persistent
        width="500"
        class="$styles.dialog"
    >
        <v-card>
            <v-card-item>
                <div class="$styles.nameFieldsWrapper">
                    <v-text-field
                        v-model="modifiedUser.firstName"
                        label="First name"
                    />
                    <v-text-field
                        v-model="modifiedUser.lastName"
                        label="Last name"
                    />
                </div>

                <v-text-field
                    v-model="modifiedUser.email"
                    label="Email"
                />
                <v-text-field
                    v-model="modifiedUser.phone"
                    label="Phone"
                />
            </v-card-item>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    color="primary"
                    :disabled="isModifyButtonDisabled"
                    @click="modifyUser"
                >
                    Modify
                </v-btn>
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
    import { IUserItem } from '../types'
    import { ref } from 'vue'

    const props = withDefaults(
        defineProps<{
            visible: boolean
            user: IUserItem
        }>(), {
            visible: false
        }
    )

    const emit = defineEmits<{
        (e: 'update:visible', value: boolean): void,
        (e: 'update:user', value: IUserItem | undefined): void,
        (e: 'modify-user'): void
    }>()

    const dialog = computed(() => props.visible ) //the intermediary variable for the boolean value of dialog visibility
    const modifiedUser = ref(props.user) //the intermediary variable for the value of modified user
    const isModifyButtonDisabled = computed(
        () => Boolean(
            !modifiedUser.value.firstName ||
                !modifiedUser.value.lastName ||
                !modifiedUser.value.phone ||
                !modifiedUser.value.email
        )
    ) //the variable for the computed disable status modify button

    /**
     * hides the dialog and resets the value of the active user
     */
    function closeDialog() {
        emit('update:visible', false)
        emit('update:user', undefined)
    }

    /**
     * modify passed user, emit 'modify-user' event, hides the dialog and resets the value of the active user
     */
    function modifyUser() {
        emit('update:user', modifiedUser.value)
        emit('modify-user')
        closeDialog()
    }
</script>

<style module lang="scss">
    .nameFieldsWrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .dialog {
        padding: 10px;
    }
</style>
