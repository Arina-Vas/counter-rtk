import s from '@/features/counters/styles/Counters.module.css'
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {
    selectEditMode,
    selectError,
    selectMaxValue,
    selectMinValue
} from "@/features/counters/model/counter/counterSelectors.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useEffect, useState} from "react";
import {
    changeEditModeAC,
    changeMaxValueAC,
    changeMinValueAC, ErrorType,
    setCountValueAC, setErrorAC
} from "@/features/counters/model/counter/counter-reducer.ts";
import {ValueForm} from "@/common/components/ValueForm/ValueForm.tsx";
import {Button} from "@/common/components/Button/Button.tsx";
import {saveState} from "@/app/localStorage.ts";




export const Settings = () => {
    const minValue = useAppSelector(selectMinValue);
    const maxValue = useAppSelector(selectMaxValue);
    const editMode = useAppSelector(selectEditMode)
    const dispatch = useAppDispatch();
    const error = useAppSelector(selectError)
    const [newMinValue, setNewMinValue] = useState<number>(minValue)
    const [newMaxValue, setNewMaxValue] = useState<number>(maxValue)

    useEffect(() => {
        let errorType: ErrorType = ''
        if (newMinValue >= newMaxValue) {
            errorType='error'
        } else if (newMaxValue < 0) {
            errorType='errorMax'
        } else if (newMinValue < 0) {
            errorType='errorMin'
        }
        dispatch(setErrorAC({error: errorType}))
    }, [ newMinValue, newMaxValue])



    const onChangeMaxValueHandler = (num: number) => {
        console.log('change')
        setNewMaxValue(num)
    }

    const onChangeMinValueHandler = (num: number) => {
        setNewMinValue(num)
    }
    const setValuesHandler = () => {
        dispatch(changeMaxValueAC({maxValue: newMaxValue}))
        dispatch(changeMinValueAC({minValue: newMinValue}))
        dispatch(setCountValueAC({count: newMinValue}))
        dispatch(changeEditModeAC({editMode: false}))
        saveState<string>('maxValue', String(newMaxValue))
    }

    const buttonIsDisabled = error !== '' || !editMode

    const isErrorMax = error === `errorMax` || error === 'error'
    const isErrorMin = error === `errorMin` || error === 'error'

    return (
        <div className={s.table}>
            <div className={s.screen}>
                <ValueForm
                    isError={isErrorMax}
                    value={newMaxValue}
                    title={'Max value: '}
                    onChange={onChangeMaxValueHandler}
                />
                <ValueForm
                    isError={isErrorMin}
                    value={newMinValue}
                    title={'Min value: '}
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

