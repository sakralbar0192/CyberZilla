import { IEntityItem, TValueOf } from 'shared/types'

export interface IUserItem extends IEntityItem {
    'firstname': string
    'lastname': string
    'email': string
    'phone': string
}

export const EUsersMethods = {
    GET_ALL_USERS: 'https://fakerapi.it/api/v1/persons',
    GET_USER_BY_ID: 'https://fakerapi.it/api/v1/persons'
} as const
export type EUsersMethods = TValueOf<typeof EUsersMethods>
