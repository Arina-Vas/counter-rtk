import {Calculator} from "./Calculator.tsx";
import {Settings} from "./Settings.tsx";
import s from '../../app/App.module.css'


export const Counter = () => {
    return (
        <div className={s.counter}>
            <Settings/>
            <Calculator/>
        </div>
    );
};