import {Button} from "../Button.tsx";
import s from '../../app/App.module.css'
import {ValueForm} from "../ValueForm.tsx";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {
    changeEditModeAC,
    changeErrorModeAC,
    changeMaxValueAC,
    changeMinValueAC,
    setCountValueAC
} from "../../model/counter/counter-reducer.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectEditMode, selectMaxValue, selectMinValue} from "../../model/counter/counterSelectors.ts";


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
        const regex = /\./
        switch (true) {
            case ((newMinValue < 0 && newMaxValue < 0) || (newMaxValue <= newMinValue)):
                setErrorType('error');
                break;
            case (newMaxValue < 0 || regex.test(String(newMaxValue))):
                setErrorType('errorMax');
                break;
            case (newMinValue < 0 || regex.test(String(newMinValue))):
                setErrorType('errorMin');
                break;
            default:
                setErrorType('');
                break;
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
    }

    const buttonIsDisabled = errorType !== '' || !editMode

    const getClassName = (valueType: 'Min' | 'Max') => {
        return (errorType === `error${valueType}` || errorType === 'error') ? s.errorBlock : '';
    }

    const classNameMax = getClassName('Max')
    const classNameMin = getClassName('Min')

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

