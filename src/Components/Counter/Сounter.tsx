import {Calculator} from "./Calculator.tsx";
import {Settings} from "./Settings.tsx";


export const Counter = () => {
    return (
        <div className={'counter'}>
            <Settings/>
            <Calculator/>
        </div>
    );
};