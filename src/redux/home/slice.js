import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    error: null,
    loading: false,
    location: null,
    searchValue: null
};

const slice = createSlice({
    name: 'home',
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
                state.data = null,
                state.error = payload.error
        },
        clear: (state, { payload }) => {
            state.loading = false,
                state.data = null,
                state.error = null
        },
        setLocation: (state, { payload }) => {
            state.location = payload.location
        }
    }
});

const { actions, reducers } = slice;

export { actions, reducers };
export default slice;