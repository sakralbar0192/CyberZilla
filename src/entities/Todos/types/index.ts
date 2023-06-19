import { IEntityItem, TValueOf } from 'shared/types'

export interface ITodoItem extends IEntityItem {
    completed : boolean
    id : number
    todo : string
}

export const ETodosMethods= {
    GET_ALL_USER_TODOS: 'https://dummyjson.com/todos/user/'
} as const
export type ETodosMethods = TValueOf<typeof ETodosMethods>
