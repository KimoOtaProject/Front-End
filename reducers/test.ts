import {createSlice} from "@reduxjs/toolkit";

// test 의 최초 상태가 될 object
const initialState = {
    value: 0,
};

const testSlice = createSlice({
    name: 'test', // slice 이름
    initialState, // slice 최초 state
    reducers: { // test 의 동작(reducer)
        changeValue: (state, action) => {
            state.value = action.payload;
        }, // value 값을 변경하는 동작
    },
    // extraReducers 는 비동기 동작을 수행하는 reducer 임.
    // extraReducers: builder =>  {},
});

// 이겨서 export 한 reducer 들을 component 에서 가져와 dispatch 합수로 감싸 사용하면 변경이 저장됨.
export const {
    changeValue,
} = testSlice.actions;
export default testSlice;
