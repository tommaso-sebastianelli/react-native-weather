import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    searchValue: null,
    data: [],
    error: null
};

const slice = createSlice({
    name: 'location',
    initialState: initialState,
    reducers: {
        start: (state, { payload }) => {
            state.searchValue = payload.searchValue,
                state.loading = true
        },
        success: (state, { payload }) => {
            state.loading = false,
                state.data = payload.data,
                state.error = null
        },
        failure: (state, { payload }) => {
            state.loading = false,
                state.data = [],
                state.error = payload.error
        },
    }
});

const { actions, reducers } = slice;

export { actions, reducers };
export default slice;