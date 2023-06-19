import { IPaymentItem } from 'entities/Payments/types'
import { InjectionKey } from 'vue'

export const openPaymentInfoDialogKey = Symbol() as InjectionKey<(payment: IPaymentItem) => void>
