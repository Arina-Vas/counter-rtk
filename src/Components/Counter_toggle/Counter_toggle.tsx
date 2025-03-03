import {Button} from "../Button.tsx";
import s from '../../app/App.module.css';
import {Settings_toggle} from "./Settings_toggle.tsx";
import {Screen_toggle} from "./Screen_toggle.tsx";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {
    selectCountToggle,
    selectMaxValueToggle, selectMinValueToggle,
    selectSettingsModeToggle
} from "../../model/counterToggle/counterToggleSelectors.ts";
import {changeSettingsModeAC, setCountValueToggleAC} from "../../model/counterToggle/counterToggle-reducer.ts";


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