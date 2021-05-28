import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        changeValue: (state, action) => state.value = action.payload,
    },
    extraReducers: builder =>  {},
});

export const {
    changeValue,
} = testSlice.actions;
export default testSlice;
