import { requestFromApi } from 'shared/lib/requestFromApi'
import { ETodosMethods, ITodoItem } from '../types'
import { IResponse } from 'shared/types'

interface IResponseData {
    todos: ITodoItem[]
}

/**
 * requests information about user's todos from the server
 *
 * @param id - user id
 */
export async function getUserTodos(id: number): Promise<IResponse<ITodoItem[]>> {
    const url = ETodosMethods.GET_ALL_USER_TODOS + id
    await new Promise(res=> setTimeout(() => res(true), 3000))
    const response =  await requestFromApi<IResponseData>({ url })

    return {
        ...response,
        data: response.data?.todos
    }
}
