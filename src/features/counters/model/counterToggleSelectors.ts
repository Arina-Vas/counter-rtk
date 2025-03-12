import {RootState} from "@/app/store.ts";


export const selectCountToggle = (state:RootState) => state.counterToggle.count

export const selectMinValueToggle = (state:RootState) => state.counterToggle.minValue

export const selectMaxValueToggle = (state:RootState) => state.counterToggle.maxValue

export const selectSettingsModeToggle = (state:RootState) => state.counterToggle.settingsMode