import s from '../../Counters.module.css'
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectEditMode, selectMaxValue, selectMinValue} from "@/features/counters/model/counterSelectors.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useEffect, useState} from "react";
import {
    changeEditModeAC,
    changeErrorModeAC,
    changeMaxValueAC,
    changeMinValueAC,
    setCountValueAC
} from "@/features/counters/model/counter-reducer.ts";
import {ValueForm} from "@/common/components/ValueForm/ValueForm.tsx";
import {Button} from "@/common/components/Button/Button.tsx";
import {saveState} from "@/app/localStorage.ts";


type ErrorType = 'error' | 'errorMax' | 'errorMin' | ''


export const Settings = () => {


    const minValue = useAppSelector(selectMinValue);
    const maxValue = useAppSelector(selectMaxValue);
    const editMode = useAppSelector(selectEditMode)
    const dispatch = useAppDispatch();


    const [errorType, setErrorType] = useState<ErrorType>('')
    const [newMinValue, setNewMinValue] = useState<number>(minValue)
    const [newMaxValue, setNewMaxValue] = useState<number>(maxValue)

    useEffect(() => {
        if ((newMinValue < 0 && newMaxValue < 0)) {
            setErrorType('error');
        }
        else if (newMaxValue < 0) {
            setErrorType('errorMax');
        }
        else if (newMinValue < 0 ) {
            setErrorType('errorMin');
        }
        else {
            setErrorType('');
        }
    }, [newMinValue, newMaxValue])

    useEffect(() => {
        dispatch(changeErrorModeAC({
            error: errorType !== ''
        }))
    }, [dispatch, errorType]);


    const onChangeMaxValueHandler = (num: number) => {
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

    const buttonIsDisabled = errorType !== '' || !editMode

    const classNameMax = (errorType === `errorMax` || errorType === 'error') ? s.errorBlock : ''
    const classNameMin = (errorType === `errorMin` || errorType === 'error') ? s.errorBlock : ''

    return (
        <div className={s.table}>
            <div className={s.screen}>
                <ValueForm
                    className={classNameMax}
                    value={newMaxValue}
                    title={'Max value: '}
                    onChange={onChangeMaxValueHandler}
                />
                <ValueForm
                    className={classNameMin}
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

