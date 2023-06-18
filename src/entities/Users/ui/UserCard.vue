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
                @click="modifyUser"
            >
                Edit
            </v-btn>
            <v-btn variant="outlined">
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

    const router = useRouter()

    const props = withDefaults(
        defineProps<{
            user: IUserItem
        }>(), {}
    )

    const emit = defineEmits<{
        (e: 'modify-user', value: IUserItem): void
    }>()

    function modifyUser() {
        emit('modify-user', props.user)
    }
</script>

<style module lang="scss">
</style>

