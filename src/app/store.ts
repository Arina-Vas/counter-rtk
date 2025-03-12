import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "@/features/counters/model/counter-reducer.ts";
import {counterToggleReducer} from "@/features/counters/model/counterToggle-reducer.ts";


// const persistedState = loadState();

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
    counter: counterReducer,
    counterToggle: counterToggleReducer,
})

// создание store
export const store = configureStore({
    reducer: rootReducer,
    // preloadedState: persistedState
})

// store.subscribe(() => {
//     saveState({
//        counter: store.getState().counter,
//         counterToggle: store.getState().counterToggle
//     });
// });

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

