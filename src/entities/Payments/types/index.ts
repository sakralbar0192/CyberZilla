import { IEntityItem, TValueOf } from 'shared/types'

export interface IPaymentItem extends IEntityItem {
    'name': string
    'description': string
    'taxes': string
    'price': string
}

export const EPaymentsMethods = {
    GET_ALL_PAYMENTS: 'https://fakerapi.it/api/v1/products'
} as const
export type EPaymentsMethods = TValueOf<typeof EPaymentsMethods>
