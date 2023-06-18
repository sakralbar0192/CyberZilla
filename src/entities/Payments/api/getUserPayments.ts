import { requestFromApi } from 'shared/lib/requestFromApi'
import { EPaymentsMethods } from '../types'

export function getUsersPayments(id: number) {
    const url = EPaymentsMethods.GET_USER_PAYMENTS + id

    return requestFromApi({ url })
}
