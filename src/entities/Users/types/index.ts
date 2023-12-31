import { IPaymentItem } from 'entities/Payments/types'
import { ITodoItem } from 'entities/Todos/types'
import { IEntityItem, TValueOf } from 'shared/types'

export interface IUserItem extends IEntityItem {
    firstName: string
    lastName: string
    email: string
    phone: string
    todos?: ITodoItem[]
    payments?: IPaymentItem[]
}

export const EUsersMethods = {
    GET_ALL_USERS: 'https://dummyjson.com/users',
    GET_USER_BY_ID: 'https://dummyjson.com/users/'
} as const
export type EUsersMethods = TValueOf<typeof EUsersMethods>
