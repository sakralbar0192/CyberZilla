import { IEntityItem, TValueOf } from 'shared/types'

export interface IPaymentItem extends IEntityItem {
    'name': string
    'description': string
    'taxes': string
    'price': string
}

export const EPaymentsMethods = {
    GET_USER_PAYMENTS: 'https://dummyjson.com/carts/user'
} as const
export type EPaymentsMethods = TValueOf<typeof EPaymentsMethods>
