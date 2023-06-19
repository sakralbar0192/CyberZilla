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

    const openViewUserTodosDialog = inject(openPaymentInfoDialogKey)

    function viewHandler(payment: IPaymentItem) {
        if (openViewUserTodosDialog) openViewUserTodosDialog(payment)
    }
</script>

<style module lang="scss">
</style>

