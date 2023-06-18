import { requestFromApi } from 'shared/lib/requestFromApi'
import { EUsersMethods, IUserItem } from '../types'
import { IResponse } from 'shared/types'

interface IResponseData {
    users: IUserItem[]
}

export async function getAllUsers(): Promise<IResponse<IUserItem[]>> {
    const url = EUsersMethods.GET_ALL_USERS

    const response =  await requestFromApi<IResponseData>({ url })

    return {
        ...response,
        data: response.data?.users
    }
}
