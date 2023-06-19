<template>
    <v-list>
        <v-list-item
            v-for="payment in props.payments"
            :key="payment.id"
            :title="payment.title"
            :subtitle="payment.price"
            :value="payment.id"
            @click="() => {viewHandler(payment)}"
        />
    </v-list>
</template>

<script setup lang="ts">
    import { inject } from 'vue'
    import { IPaymentItem } from '../types'
    import { openPaymentInfoDialogKey } from 'pages/injectedKeys/PaymentInfo'

    const props = withDefaults(
        defineProps<{
            payments: IPaymentItem[] | undefined
        }>(), {}
    )

    const openViewUserPaymentsDialog = inject(openPaymentInfoDialogKey) // the injected function for displaying user payment info in a dialog

    /**
     * event handler for displaying information about user's payments
     *
     * @param payment - an object with information about the user's payments that needs to be displayed
     */
    function viewHandler(payment: IPaymentItem) {
        if (openViewUserPaymentsDialog) openViewUserPaymentsDialog(payment)
    }
</script>

<style module lang="scss">
</style>

