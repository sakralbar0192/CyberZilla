import { requestFromApi } from 'shared/lib/requestFromApi'
import { EUsersMethods, IUserItem } from '../types'
import { IResponse } from 'shared/types'

/**
 * requests information about single user from the server
 *
 * @param id - user id
 */
export async function getUserById(id: number): Promise<IResponse<IUserItem>> {
    const url = EUsersMethods.GET_USER_BY_ID + id

    const response = await requestFromApi<IUserItem>({ url })

    return response
}
