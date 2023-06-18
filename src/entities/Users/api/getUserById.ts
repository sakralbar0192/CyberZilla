import { requestFromApi } from 'shared/lib/requestFromApi'
import { EUsersMethods, IUserItem } from '../types'
import { IResponse } from 'shared/types'

export async function getUserById(id: number): Promise<IResponse<IUserItem>> {
    const url = EUsersMethods.GET_USER_BY_ID + id

    const response = await requestFromApi<IUserItem>({ url })

    return response
}
