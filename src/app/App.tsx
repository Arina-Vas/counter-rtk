import s from './App.module.css';
import {Header} from "@/common/components/Header/Header.tsx";
import {Main} from "@/app/Main.tsx";


function App() {

    return (
        <div className={s.App}>
            <Header/>
            <Main/>
        </div>
    )
}

export default App
