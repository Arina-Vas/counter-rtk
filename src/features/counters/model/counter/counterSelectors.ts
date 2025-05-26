import {RootState} from "@/app/store.ts";


export const selectCount = (state:RootState) => state.counter.count

export const selectMinValue = (state:RootState) => state.counter.minValue

export const selectMaxValue = (state:RootState) => state.counter.maxValue

export const selectEditMode = (state:RootState) => state.counter.editMode

export const selectError = (state:RootState) => state.counter.error
