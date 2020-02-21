import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    data: null,
    error: null
};

const slice = createSlice({
    name: 'forecasts',
    initialState: initialState,
    reducers: {
        start: (state, { payload }) => {
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
        }
    }
});

const { actions, reducers } = slice;

export { actions, reducers };
export default slice;