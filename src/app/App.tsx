import './App.css'
import {Counter} from "../Components/Counter/Сounter.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";




// const initialMinValueToggled =  2
// const initialMaxValueToggled =  6
// const initialCountValueToggled = initialMinValueToggled
// const initialSettingsMode =  false;

export type ValuesPropsType = {
    minValue: number
    maxValue: number
    count: number
}

export type KeyValueType = 'maxValue' | 'minValue' | 'count'

function App() {

    // const [values_toggle, setValues_toggle] = useState<ValuesPropsType>({
    //     minValue: initialMinValueToggled,
    //     maxValue: initialMaxValueToggled,
    //     count: initialCountValueToggled
    // });
    // const setValuesHandler_toggle = (payload: { key: KeyValueType, num: number }) => {
    //     const {key, num} = payload
    //     setValues_toggle(prevState => ({...prevState, [key]: num}))
    // }

    return (
        <div className="App">
            <div className={'nav'}>
                <NavLink to={"/Counter"}>Counter</NavLink>
                {/*<NavLink to={"/Counter_toggle"}>Toggle Counter</NavLink>*/}
            </div>
            <Routes>
                <Route path="/" element={<Navigate to={'/Counter'}/>}/>
                <Route path="/Counter" element={
                    <Counter />
                }>
                </Route>
                {/*<Route path="/Counter_toggle" element={*/}
                {/*    <Counter_toggle*/}
                {/*    maxValue={values_toggle.maxValue}*/}
                {/*    count={values_toggle.count}*/}
                {/*    minValue={values_toggle.minValue}*/}
                {/*    setValuesOnClick={setValuesHandler_toggle}*/}
                {/*    initialSettingsMode={initialSettingsMode}*/}
                {/*/>}>*/}
                {/*</Route>*/}
            </Routes>
        </div>
    )
}

export default App
