<template>
    <v-dialog
        v-model="dialog"
    >
        <v-card>
            <v-card-text>
                {{ payment.title }}
            </v-card-text>
            <v-card-text>
                Discount: <b>{{ payment.discountPercentage }}</b>
                Total: <b>{{ payment.total }}</b>
                Total price: <b>{{ payment.price * payment.total }}</b>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    color="primary"
                    block
                    @click="closeDialog"
                >
                    Close Dialog
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { IPaymentItem } from '../types'

    const props = withDefaults(
        defineProps<{
            payment: IPaymentItem
            visible: boolean
        }>(), {
            visible: false
        }
    )

    const dialog = computed(() => props.visible) //the intermediary variable for the boolean value of dialog visibility

    const emit = defineEmits<{
        (e: 'update:visible', value: boolean): void
        (e: 'update:payment', value: undefined): void
    }>()

    /**
     * hides the dialog and resets the value of the displayed payment
     */
    function closeDialog() {
        emit('update:visible', false)
        emit('update:payment', undefined)
    }
</script>

<style module lang="scss">
</style>
