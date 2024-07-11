import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TableState {
    data: any[];
    loading: boolean;
    pagination: {
        current: number;
        pageSize: number;
        total: number; 
    };
    filters: any; 
    sort: string; 
    searchText: string;
}

const initialState: TableState = {
    data: [],
    loading: false,
    pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
    },
    filters: {},
    sort: '',
    searchText: '',
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<any[]>) {
            state.data = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setPagination(state, action: PayloadAction<{ current: number; pageSize: number; total: number }>) {
            state.pagination = action.payload;
        },
        setFilters(state, action: PayloadAction<any>) {
            state.filters = action.payload;
        },
        setSort(state, action: PayloadAction<string>) {
            state.sort = action.payload;
        },
        setSearchText(state, action: PayloadAction<string>) {
            state.searchText = action.payload;
        },
    },
});

export const { setData, setLoading, setPagination, setFilters, setSort, setSearchText } = tableSlice.actions;
export default tableSlice.reducer;