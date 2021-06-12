import {useDispatch, useSelector} from "react-redux";
import { InputNumber } from "antd";

import style from '../styles/Main.module.scss';

import {changeValue} from "../reducers/test";
import {rootState} from "../reducers";

function Main() {
  const test = useSelector((state:rootState) => state.test);
  const dispatch = useDispatch();

  return (
    <main className={style.container}>
      <div className={style.content}>
        <h1>Main</h1>
        <div>
          <span>test.value = </span>
          <span>{test.value}</span>
        </div>
        <div>
          <InputNumber onChange={value => dispatch(changeValue(Number(value)))} />
        </div>
      </div>
    </main>
  );
}

export default Main;
