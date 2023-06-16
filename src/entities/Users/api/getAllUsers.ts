import { requestFromApi } from 'shared/lib/requestFromApi'
import { EUsersMethods } from '../types'

const MAX_USERS_COUNT = 100

export function getAllUsers() {
    const url = EUsersMethods.GET_ALL_USERS
    const params = {
        _quantity: MAX_USERS_COUNT
    }

    return requestFromApi({ url, params })
}
