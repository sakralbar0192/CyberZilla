<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            persistent
            width="500"
        >
            <v-card>
                <v-card-item>
                    <div class="$styles.nameFieldsWrapper">
                        <v-text-field
                            v-model="firstName"
                            label="First name"
                            variant="outlined"
                        />
                        <v-text-field
                            v-model="lastName"
                            label="Last name"
                            variant="outlined"
                        />
                    </div>

                    <v-text-field
                        v-model="email"
                        label="Email"
                        variant="outlined"
                    />
                    <v-text-field
                        v-model="phone"
                        label="Phone"
                        variant="outlined"
                    />
                </v-card-item>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        color="primary"
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
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue'
    import { IUserItem } from '../types'

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
        (e: 'modify-user-success', value: IUserItem): void
    }>()

    const dialog = computed(() => props.visible )
    const firstName = ref(props.user.firstName)
    const lastName = ref(props.user.lastName)
    const email = ref(props.user.email)
    const phone = ref(props.user.phone)

    function closeDialog() {
        emit('update:visible', false)
    }

    function modifyUser() {
        const modifiedUser: IUserItem = {
            id: props.user.id,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value
        }

        emit('modify-user-success', modifiedUser)
    }
</script>

<style module lang="scss">
    .nameFieldsWrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
