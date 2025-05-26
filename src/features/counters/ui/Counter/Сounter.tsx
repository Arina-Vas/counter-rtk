import {Settings} from "./Settings/Settings.tsx";
import s from '../../styles/Counters.module.css'
import {Calculator} from "@/features/counters/ui/Counter/Calculator/Calculator.tsx";
export const Counter = () => {
    return (
        <div className={s.counter}>
            <Settings/>
            <Calculator/>
        </div>
    );
};