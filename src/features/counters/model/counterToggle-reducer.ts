import {createAction, createReducer} from "@reduxjs/toolkit";

const initialStateToggle = {
    count: 0,
    minValue: 2,
    maxValue: 6,
    settingsMode: false
}

export const changeMaxValueToggleAC = createAction<{ maxValue: number }>('counterToggle/changeMaxValueToggle')
export const changeMinValueToggleAC = createAction<{ minValue: number }>('counterToggle/changeMinValueToggle')
export const setCountValueToggleAC = createAction<{ count: number }>('counterToggle/setCountValueToggle')
export const changeSettingsModeAC = createAction<{ isSet: boolean }>('counterToggle/changeSettingsMode')


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
        .addCase(changeSettingsModeAC, (state, action) => {
            state.settingsMode = action.payload.isSet
        })

})