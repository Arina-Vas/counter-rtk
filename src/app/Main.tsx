import {Navigate, Route, Routes} from "react-router-dom";

import {Error} from "@/common/components/Error/Error.tsx";
import {Counter} from "@/features/counters/ui/Counter/Сounter.tsx";
import {Counter_toggle} from "@/features/counters/ui/Counter_toggle/Counter_toggle.tsx";



export const PATH = {
    COUNTER: "/Counter",
    COUNTER_TOGGLE: "/CounterToggle",
    ERROR: "/*",
} as const;

export const Main = () => {
    return (
            <Routes>
                <Route path="" element={<Navigate to={'/Counter'}/>}/>
                <Route path={PATH.COUNTER} element={<Counter/>}/>
                <Route path={PATH.COUNTER_TOGGLE} element={<Counter_toggle/>}/>
                <Route path={PATH.ERROR} element={<Error/>}></Route>
            </Routes>
    );
};