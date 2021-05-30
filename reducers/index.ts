import {combineReducers} from "@reduxjs/toolkit";

import test from './test';

// 작성한 reducer 들을 하나로 합쳐 export
export default combineReducers({
    test: test.reducer,
});
