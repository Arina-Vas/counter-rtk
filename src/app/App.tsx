import s from './App.module.css';
import {Counter} from "../Components/Counter/Сounter.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Counter_toggle} from "../Components/Counter_toggle/Counter_toggle.tsx";


function App() {
    const linkClassName = (props:{isActive: boolean}) => props.isActive ? s.active : ''
    return (
        <div className={s.App}>
            <div className={s.nav}>
                <NavLink className={linkClassName} to={"/Counter"}>Counter</NavLink>
                <NavLink className={linkClassName} to={"/Counter_toggle"}>Toggle Counter</NavLink>
            </div>
            <Routes>
                <Route path="/" element={<Navigate to={'/Counter'}/>}/>
                <Route path="/Counter" element={<Counter/>}/>
                <Route path="/Counter_toggle" element={<Counter_toggle/>}/>
            </Routes>
        </div>
    )
}

export default App
