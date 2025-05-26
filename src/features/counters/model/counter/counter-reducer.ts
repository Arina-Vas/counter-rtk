import {createAction, createReducer} from "@reduxjs/toolkit";
export type ErrorType = 'error' | 'errorMax' | 'errorMin' | ''

type StateType = {
    count: number
    minValue: number
    maxValue: number
    editMode: boolean
    error: ErrorType
}

const initialState:StateType = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    editMode: true,
    error: ''
}

export const changeMaxValueAC = createAction<{ maxValue: number }>('counter/changeMaxValue')
export const changeMinValueAC = createAction<{ minValue: number }>('counter/changeMinValue')
export const setCountValueAC = createAction<{ count: number }>('counter/setCountValue')
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
        .addCase(changeEditModeAC, (state, action) => {
            state.editMode = action.payload.editMode
        })
        .addCase(setErrorAC, (state, action) => {
            state.error = action.payload.error
        })

})