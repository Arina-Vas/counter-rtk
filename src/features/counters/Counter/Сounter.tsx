import {Calculator} from "./Calculator/Calculator.tsx";
import {Settings} from "./Settings/Settings.tsx";
import s from './Counter.module.css'


export const Counter = () => {
    return (
        <div className={s.counter}>
            <Settings/>
            <Calculator/>
        </div>
    );
};