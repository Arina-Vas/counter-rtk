import {createAction, createReducer} from "@reduxjs/toolkit";
import {ErrorType} from "@/features/counters/model/counter/counter-reducer.ts";

type StateType = {
    count: number
    minValue: number
    maxValue: number
    settingsMode: boolean
    error: ErrorType
}

const initialStateToggle: StateType = {
    count: 0,
    minValue: 2,
    maxValue: 6,
    settingsMode: true,
    error: ''
}

export const changeMaxValueToggleAC = createAction<{ maxValue: number }>('counterToggle/changeMaxValueToggle')
export const changeMinValueToggleAC = createAction<{ minValue: number }>('counterToggle/changeMinValueToggle')
export const setCountValueToggleAC = createAction<{ count: number }>('counterToggle/setCountValueToggle')
export const changeSettingsModeToggleAC = createAction<{ isSet: boolean }>('counterToggle/changeSettingsMode')
export const setErrorToggleAC = createAction<{ error: ErrorType }>('counterToggle/setErrorToggleAC')

export const counterToggleReducer = createReducer(initialStateToggle, (builder) => {
    builder
        .addCase(changeMaxValueToggleAC, (state, action) => {
            state.maxValue = action.payload.maxValue
        })
        .addCase(changeMinValueToggleAC, (state, action) => {
            state.minValue = action.payload.minValue
        })
        .addCase(setCountValueToggleAC, (state, action) => {
            state.count = action.payload.count
        })
        .addCase(changeSettingsModeToggleAC, (state, action) => {
            state.settingsMode = action.payload.isSet
        })
        .addCase(setErrorToggleAC, (state, action) => {
            state.error = action.payload.error
        })

})