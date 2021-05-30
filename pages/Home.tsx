import {useDispatch, useSelector} from "react-redux";
import { InputNumber } from "antd";

import {changeValue} from "../reducers/test";
import {rootState} from "../reducers";

function Home(props: any) {
    const test = useSelector((state:rootState) => state.test);
    const dispatch = useDispatch();
    console.log(props)
    return (
        <main style={{padding: '0 1rem'}}>
            <h1>Home</h1>
            <div>
                <span>test.value = </span>
                <span>{test.value}</span>
            </div>
            <div>
                <InputNumber onChange={value => void(dispatch(changeValue(Number(value))))} />
            </div>
        </main>
    );
}

export default Home;
