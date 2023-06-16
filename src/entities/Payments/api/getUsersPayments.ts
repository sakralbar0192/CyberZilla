import { requestFromApi } from 'shared/lib/requestFromApi'
import { EPaymentsMethods } from '../types'

export function getUsersPayments(id: number, paymentsCount: number) {
    const url = EPaymentsMethods.GET_ALL_PAYMENTS
    const params = {
        _quantity: paymentsCount,
        _seed: id
    }

    return requestFromApi({ url, params })
}
