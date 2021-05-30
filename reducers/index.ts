import {combineReducers} from "@reduxjs/toolkit";

import test from './test';

// 우리의 redux 에서 사용될 state interface
export interface rootState {
    test: {
        value: number,
    },
};

// 작성한 reducer 들을 하나로 합쳐 export
export default combineReducers({
    test: test.reducer,
});
