import {RootState} from "@/app/store.ts";


export const selectCount = (state:RootState) => state.counter.count

export const selectMinValue = (state:RootState) => state.counter.minValue

export const selectMaxValue = (state:RootState) => state.counter.maxValue

export const selectErrorMode = (state:RootState) => state.counter.errorMode

export const selectEditMode = (state:RootState) => state.counter.editMode


