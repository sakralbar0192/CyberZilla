import { requestFromApi } from 'shared/lib/requestFromApi'
import { EUsersMethods } from '../types'

const ONE_USER_QUANTITY = 1

export function getUserById(id: number) {
    const url = EUsersMethods.GET_USER_BY_ID
    const params = {
        _quantity: ONE_USER_QUANTITY,
        _seed: id
    }

    return requestFromApi({ url, params })
}
