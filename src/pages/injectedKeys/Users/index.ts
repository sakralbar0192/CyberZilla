import { InjectionKey } from 'vue'
import { IUserItem } from 'entities/Users/types'

export const openModifyUserDialogKey = Symbol() as InjectionKey<(modifiedUser: IUserItem) => void> //the key for the inject/provide function that opens a modify user dialog

export const openViewUserTodosDialogKey = Symbol() as InjectionKey<(modifiedUser: IUserItem) => void> //the key for the inject/provide function that opens a dialog with information about user todos

export const modifyUserKey = Symbol() as InjectionKey<(modifiedUser: IUserItem) => void> //the key for the inject/provide function that modify user
