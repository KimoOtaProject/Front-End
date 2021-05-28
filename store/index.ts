import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {createWrapper, MakeStore, Context} from "next-redux-wrapper";
import reducer from '../reducers';

export interface State {
    // 요소
}

// 1. 스토어를 생성하는 makeStore 함수 정의
const makeStore : MakeStore<State> = (context : Context) => configureStore({
    reducer,
    devTools: true,
    middleware: getDefaultMiddleware(),
});

// 2. next-redux-wrapper 에서 제공하는 createWrapper 정의
export const Wrapper = createWrapper<State>(makeStore, {debug : true});
