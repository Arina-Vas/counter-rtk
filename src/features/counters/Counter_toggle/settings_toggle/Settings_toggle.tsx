import s from '../../Counters.module.css'
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectMaxValueToggle, selectMinValueToggle} from "@/features/counters/model/counterToggleSelectors.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useEffect, useState} from "react";
import {
    changeMaxValueToggleAC,
    changeMinValueToggleAC, changeSettingsModeAC,
    setCountValueToggleAC
} from "@/features/counters/model/counterToggle-reducer.ts";
import {ValueForm} from "@/common/components/ValueForm/ValueForm.tsx";
import {Button} from "@/common/components/Button/Button.tsx";

type ErrorType = 'error' | 'errorMax' | 'errorMin' | ''

export const Settings_toggle = () => {

    const minValue = useAppSelector(selectMinValueToggle);
    const maxValue = useAppSelector(selectMaxValueToggle);
    const dispatch = useAppDispatch();

    const [errorType, setErrorType] = useState<ErrorType>('')
    const [newMinValueToggle, setNewMinValueToggle] = useState<number>(minValue)
    const [newMaxValueToggle, setNewMaxValueToggle] = useState<number>(maxValue)


    useEffect(() => {
        const regex = /\./
        switch (true) {
            case ((newMinValueToggle < 0 && newMaxValueToggle < 0) || (newMaxValueToggle <= newMinValueToggle)):
                setErrorType('error');
                break;
            case (newMaxValueToggle < 0 || regex.test(String(newMaxValueToggle))):
                setErrorType('errorMax');
                break;
            case (newMinValueToggle < 0 || regex.test(String(newMinValueToggle))):
                setErrorType('errorMin');
                break;
            default:
                setErrorType('');
                break;
        }
    }, [newMinValueToggle, newMaxValueToggle])

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
        dispatch(changeSettingsModeAC({isSet: false}))
    }

    const getClassName = (valueType: 'Min' | 'Max') => {
        return (errorType === `error${valueType}` || errorType === 'error') ? s.errorBlock : ' ';
    }

    const classNameMax = getClassName('Max')
    const classNameMin = getClassName('Min')

    const buttonIsDisabled = errorType !== ''
    return (
        <div className={s.table}>
            <div className={s.screen}>
                {(errorType !== '') ? <div>Incorrect value</div> : <div>Enter values and press 'set'</div>}
                <ValueForm
                    className={classNameMax}
                    value={newMaxValueToggle}
                    title={'Max value toggle: '}
                    onChange={onChangeMaxValueHandler}
                />
                <ValueForm
                    className={classNameMin}
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

