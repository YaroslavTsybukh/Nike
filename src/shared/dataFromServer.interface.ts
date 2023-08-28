export interface IDataFromServer {
    id: string
    path: string
    timestamp: {
        nanoseconds: number
        seconds: number
    }
}
