import { IEntityItem, TValueOf } from 'shared/types'

export interface IPaymentItem extends IEntityItem {
    discountPercentage: number
    discountedPrice: number
    price: number
    quantity: number
    title: string
    total: number
}

export const EPaymentsMethods = {
    GET_USER_PAYMENTS: 'https://dummyjson.com/carts/user/'
} as const
export type EPaymentsMethods = TValueOf<typeof EPaymentsMethods>
