import { requestFromApi } from 'shared/lib/requestFromApi'
import { EPaymentsMethods, IPaymentItem } from '../types'
import { IResponse } from 'shared/types'

interface IResponseData {
    carts: {
        products?: IPaymentItem[]
    }[]
}

/**
 * requests information about user's payments from the server
 *
 * @param id - user id
 */
export async function getUsersPayments(id: number): Promise<IResponse<IPaymentItem[]>> {
    const url = EPaymentsMethods.GET_USER_PAYMENTS + id

    const response = await requestFromApi<IResponseData>({ url })

    return {
        ...response,
        data: response.data?.carts[0] && response.data?.carts[0].products
            ? response.data?.carts[0].products
            : []
    }
}
