<template>
    <section v-title="{title: 'User payments info'}">
        <v-btn
            variant="outlined"
            :class="$style.goBackButton"
            @click="router.back()"
        >
            Back to user list
        </v-btn>
        <div>
            <div v-if="usersStore.activeUser">
                <div :class="$style.userCardWrapper">
                    <UserCard :user="usersStore.activeUser" />
                </div>

                <div>
                    <div v-if="usersStore.activeUser.payments">
                        <div
                            v-if="usersStore.activeUser.payments.length"
                        >
                            <PaymentsList :payments="usersStore.activeUser.payments" />
                        </div>

                        <p v-else>
                            {{ NOTHING_TO_DISPLAY_MESSAGE }}
                        </p>
                    </div>
                    <p v-else-if="usersStore.isPaymentsLoadedError">
                        {{ usersStore.paymentsLoadedErrorMessage }}
                    </p>
                    <div v-else-if="usersStore.isPaymentsLoading">
                        <AppLoader />
                    </div>
                    <p v-else>
                        {{ DEFAULT_ERROR_MESSAGE }}
                    </p>
                </div>
            </div>
            <p v-else-if="usersStore.isUserLoadedError">
                {{ usersStore.userLoadedErrorMessage }}
            </p>
            <div v-else-if="usersStore.isUserLoading">
                <AppLoader />
            </div>
            <p v-else>
                {{ DEFAULT_ERROR_MESSAGE }}
            </p>
        </div>
    </section>
    <PaymentInfoDialog
        v-if="displayedPayment"
        v-model:visible="viewUserPaymentsDialogVisible"
        :payment="displayedPayment"
    />
</template>

<script setup lang="ts">
    import { useUsersStore } from 'app/store/users'
    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import UserCard from 'entities/Users/ui/UserCard.vue'
    import AppLoader from 'widgets/AppLoader.vue'
    import { DEFAULT_ERROR_MESSAGE, NOTHING_TO_DISPLAY_MESSAGE } from 'shared/const'
    import PaymentsList from 'entities/Payments/ui/PaymentsList.vue'
    import { openPaymentInfoDialogKey } from './injectedKeys/PaymentInfo'
    import { provide } from 'vue'
    import PaymentInfoDialog from 'entities/Payments/ui/PaymentInfoDialog.vue'
    import { IPaymentItem } from 'entities/Payments/types'

    const usersStore = useUsersStore()
    const route = useRoute()
    const router = useRouter()
    const id = Number(route.params.id)

    onMounted(() => {
        usersStore.setActiveUser(id)
    })

    const viewUserPaymentsDialogVisible = ref(false) //a variable that stores the user payments dialog visibility value
    const displayedPayment = ref() //a variable that stores the displayed in payments info dialog payments

    /**
     * shows a dialog with information about payments and determines the displayed payments
     *
     * @param payment displayed payments
     */
    function openPaymentInfoDialog(payment: IPaymentItem) {
        displayedPayment.value = payment
        viewUserPaymentsDialogVisible.value = true
    }

    provide(openPaymentInfoDialogKey, openPaymentInfoDialog) //allows child elements to access a function by key
</script>

<style module lang="scss">
    .goBackButton,
    .userCardWrapper {
        margin: 0 0 20px;
    }
</style>
