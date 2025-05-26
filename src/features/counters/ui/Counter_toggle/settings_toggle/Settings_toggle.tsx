import s from '../../../styles/Counters.module.css'
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {
    selectErrorToggle,
    selectMaxValueToggle,
    selectMinValueToggle
} from "@/features/counters/model/counterToggle/counterToggleSelectors.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useEffect, useState} from "react";
import {
    changeMaxValueToggleAC,
    changeMinValueToggleAC, changeSettingsModeToggleAC,
    setCountValueToggleAC, setErrorToggleAC
} from "@/features/counters/model/counterToggle/counterToggle-reducer.ts";
import {ValueForm} from "@/common/components/ValueForm/ValueForm.tsx";
import {Button} from "@/common/components/Button/Button.tsx";
import {ErrorType} from "@/features/counters/model/counter/counter-reducer.ts";


export const Settings_toggle = () => {
    const error = useAppSelector(selectErrorToggle);
    const minValue = useAppSelector(selectMinValueToggle);
    const maxValue = useAppSelector(selectMaxValueToggle);
    const dispatch = useAppDispatch();
    const [newMinValueToggle, setNewMinValueToggle] = useState<number>(minValue)
    const [newMaxValueToggle, setNewMaxValueToggle] = useState<number>(maxValue)

    useEffect(() => {
        let errorType: ErrorType = ''
        if (newMinValueToggle >= newMaxValueToggle) {
            errorType='error'
        } else if (newMaxValueToggle < 0) {
            errorType='errorMax'
        } else if (newMinValueToggle < 0) {
            errorType='errorMin'
        }
        dispatch(setErrorToggleAC({error: errorType}))
    }, [ newMinValueToggle, newMaxValueToggle])

    const onChangeMaxValueHandler = (num: number) => {
        setNewMaxValueToggle(num)
    }

    const onChangeMinValueHandler = (num: number) => {
        setNewMinValueToggle(num)
    }

    const setValuesHandler = () => {
        dispatch(changeMaxValueToggleAC({maxValue: newMaxValueToggle}))
        dispatch(changeMinValueToggleAC({minValue: newMinValueToggle}))
        dispatch(setCountValueToggleAC({count: newMinValueToggle}))
        dispatch(changeSettingsModeToggleAC({isSet: false}))
    }

    const isErrorMax = error === `errorMax` || error === 'error'
    const isErrorMin = error === `errorMin` || error === 'error'

    const buttonIsDisabled = error !== ''
    return (
        <div className={s.table}>
            <div className={s.screen}>
                {(error !== '') ? <div>Incorrect value</div> : <div>Enter values and press 'set'</div>}
                <ValueForm
                    isError={isErrorMax}
                    value={newMaxValueToggle}
                    title={'Max value toggle: '}
                    onChange={onChangeMaxValueHandler}
                />
                <ValueForm
                    isError={isErrorMin}
                    value={newMinValueToggle}
                    title={'Min value toggle: '}
                    onChange={onChangeMinValueHandler}
                />
            </div>
            <div className={s.buttons}>
                <Button
                    name={'set'}
                    disabled={buttonIsDisabled}
                    onclick={setValuesHandler}/>
            </div>
        </div>
    );
};

