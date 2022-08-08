import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'products',
    initialState: {
        value: [],
        // isLoading: true,
    },
    reducers: {
        // loading: (state, action) => {
        //     state.isLoading = action.payload
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        updateStore: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateStore } = counterSlice.actions

export default counterSlice.reducer