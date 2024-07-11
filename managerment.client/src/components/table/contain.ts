export interface TablePagingtion {
    pagination: {
        current: number,
        pageSize: number
    },
    sort: {
        field: string,
        order: string
    },
    filter: [{
        text: string, 
        value: string
    }],
    textSearch: string
}