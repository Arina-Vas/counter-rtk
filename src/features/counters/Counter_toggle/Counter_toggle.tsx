import s from '../Counters.module.css'
import {Settings_toggle} from "./settings_toggle/Settings_toggle.tsx";
import {Screen_toggle} from "./screen_toggle/Screen_toggle.tsx";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {
    selectCountToggle,
    selectMaxValueToggle,
    selectMinValueToggle, selectSettingsModeToggle
} from "@/features/counters/model/counterToggleSelectors.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {changeSettingsModeAC, setCountValueToggleAC} from "@/features/counters/model/counterToggle-reducer.ts";
import {Button} from "@/common/components/Button/Button.tsx";





export const Counter_toggle = () => {

    const minValue = useAppSelector(selectMinValueToggle);
    const maxValue = useAppSelector(selectMaxValueToggle);
    let count = useAppSelector(selectCountToggle);
    const settingsMode = useAppSelector(selectSettingsModeToggle)
    const dispatch = useAppDispatch();


    const onClickIncHandler = () => {
        if (count < maxValue) {
            dispatch(setCountValueToggleAC({count: ++count}))
        }
    }
    const onClickResetHandler = () => {
        if (count > minValue){
            dispatch(setCountValueToggleAC({count: minValue}))
        }
    }
    const onClickSetHandler = () => {
        dispatch(changeSettingsModeAC({isSet: true}))
    }

    const IsButtonIncDisabled = count === maxValue
    const IsButtonResetDisabled = count === minValue


    return (
        settingsMode ?
            <Settings_toggle/>
            :
            <div className={s.table}>
                <Screen_toggle/>
                <progress
                    className={s.progress}
                    max={maxValue}
                    value={count}>

                </progress>
                <div className={s.buttons}>
                    <Button
                        name={'inc'}
                        disabled={IsButtonIncDisabled}
                        onclick={onClickIncHandler}/>
                    <Button
                        name={'reset'}
                        disabled={IsButtonResetDisabled}
                        onclick={onClickResetHandler}/>
                    <Button
                        name={'set'}
                        onclick={onClickSetHandler}/>
                </div>
            </div>
    );
};