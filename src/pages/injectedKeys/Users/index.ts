import { InjectionKey } from 'vue'
import { IUserItem } from 'entities/Users/types'

export const openModifyUserDialogKey = Symbol() as InjectionKey<(modifiedUser: IUserItem) => void>
export const openViewUserTodosDialogKey = Symbol() as InjectionKey<(modifiedUser: IUserItem) => void>
export const modifyUserKey = Symbol() as InjectionKey<(modifiedUser: IUserItem) => void>
