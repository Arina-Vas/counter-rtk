import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <HashRouter>
            <StrictMode>
                <App/>
            </StrictMode>
        </HashRouter>
    </Provider>
    ,
)
