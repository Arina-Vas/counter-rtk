import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {countReducer} from "../model/count-reducer.ts";


// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
   counter: countReducer,
})

// создание store
export const store = configureStore({
    reducer: rootReducer,
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

