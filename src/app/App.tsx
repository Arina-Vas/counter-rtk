import './App.css'
import {Counter} from "../Components/Counter/Сounter.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Counter_toggle} from "../Components/Counter_toggle/Counter_toggle.tsx";


function App() {

    return (
        <div className="App">
            <div className={'nav'}>
                <NavLink to={"/Counter"}>Counter</NavLink>
                <NavLink to={"/Counter_toggle"}>Toggle Counter</NavLink>
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
