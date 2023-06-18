export type TValueOf<T> = T[keyof T]

export interface IServerResponse {
    data: unknown
}

export interface IResponse<T> {
    isSucceeded: boolean
    message?: string
    data?: T
}

export interface IEntityItem {
    id: number
}
