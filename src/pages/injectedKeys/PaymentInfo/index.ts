import { IPaymentItem } from 'entities/Payments/types'
import { InjectionKey } from 'vue'

export const openPaymentInfoDialogKey = Symbol() as InjectionKey<(payment: IPaymentItem) => void> //the key for the inject/provide function that opens a dialog with information about user payments
