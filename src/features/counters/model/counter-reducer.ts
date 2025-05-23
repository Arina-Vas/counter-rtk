import {createAction, createReducer} from "@reduxjs/toolkit";
export type ErrorType = 'error' | 'errorMax' | 'errorMin' | ''

const initialState = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    errorMode: false,
    editMode: false,
    error: ''
}

export const changeMaxValueAC = createAction<{ maxValue: number }>('counter/changeMaxValue')
export const changeMinValueAC = createAction<{ minValue: number }>('counter/changeMinValue')
export const setCountValueAC = createAction<{ count: number }>('counter/setCountValue')
export const changeErrorModeAC = createAction<{ error: boolean }>('counter/changeErrorMode')
export const changeEditModeAC = createAction<{ editMode: boolean }>('counter/changeEditingMode')
export const setErrorAC = createAction<{ error: ErrorType}>('counter/setErrorAC')

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeMaxValueAC, (state, action) => {
            state.maxValue = action.payload.maxValue
        })
        .addCase(changeMinValueAC, (state, action) => {
            state.minValue = action.payload.minValue
        })
        .addCase(setCountValueAC, (state, action) => {
            state.count = action.payload.count
        })
        .addCase(changeErrorModeAC, (state, action) => {
            state.errorMode = action.payload.error
        })
        .addCase(changeEditModeAC, (state, action) => {
            state.editMode = action.payload.editMode
        })
        .addCase(setErrorAC, (state, action) => {
            state.error = action.payload.error
        })

})