import { REQUEST_FAILED_MESSAGE, SUCCESS_RESPONSE_STATUS } from 'shared/const'
import axios, { AxiosResponse } from 'axios'
import { IResponse, IServerResponse } from 'shared/types'

export interface IRequestFromApiProps {
    url: string,
    method?: 'GET'
    params?: Record<string, unknown>,
    data?: Record<string, unknown> | unknown[] | null
}

/**
 * request from server bu passed url and params
 *
 * @param param0 - standart request params
 */
export async function requestFromApi<T>({
    url,
    method = 'GET',
    params,
    data = {}
}: IRequestFromApiProps): Promise<IResponse<T>> {
    const headers = {
        'Content-type': 'application/json; charset=utf-8'
    }

    const response: IResponse<T> = {
        isSucceeded: false
    }

    return await axios(
        {
            method,
            url,
            headers,
            data,
            params
        }
    )
        .then((serverResponse: AxiosResponse<IServerResponse>) => {
            if (serverResponse.status === SUCCESS_RESPONSE_STATUS) {
                response.isSucceeded = true
                response.data = serverResponse.data as T ?? undefined
            } else {
                response.message = REQUEST_FAILED_MESSAGE
            }

            return response
        }).catch(() => {
            return {
                isSucceeded: false,
                message: REQUEST_FAILED_MESSAGE
            }
        })
}
