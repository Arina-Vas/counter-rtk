import {Button} from "../Button.tsx";
import {ValueForm} from "../ValueForm.tsx";
import {useEffect, useState} from "react";
import {KeyValueType} from "../../app/App.tsx";

type ErrorType = 'error' | 'errorMax' | 'errorMin' | ''

type Props = {
    minValue: number
    maxValue: number
    setValuesOnClick: (payload: { key: KeyValueType, num: number }) => void
    setSettingMode: (isSettingMode: boolean) => void
};
export const Settings_toggle = ({
                                    maxValue,
                                    minValue,
                                    setValuesOnClick,
                                    setSettingMode
                                }: Props) => {

    const [errorType, setErrorType] = useState<ErrorType>('')
    const [values, setValues] = useState({min: minValue, max: maxValue})

    const valueArr: { key: KeyValueType, num: number }[] = [
        {
            key: 'minValue',
            num: Math.round(values.min)
        },
        {
            key: 'maxValue',
            num: Math.round(values.max)
        },
        {
            key: 'count',
            num: Math.round(values.min)
        }
    ]

    useEffect(() => {
        switch (true) {
            case ((values.min < 0 && values.max < 0) || (values.max <= values.min)):
                setErrorType('error');
                break;
            case (values.max < 0):
                setErrorType('errorMax');
                break;
            case (values.min < 0):
                setErrorType('errorMin');
                break;
            default:
                setErrorType('');
                break;
        }
    }, [values.min, values.max])


    const getValueHandler = (key: 'min' | 'max', num: number) => {
        setValues(prevState => ({...prevState, [key]: num}))
    }


    const setValuesHandler = () => {
        valueArr.forEach(({key, num}) => setValuesOnClick({key, num}))
        setSettingMode(false)
    }


    return (
        <div className={'table'}>
            <div className={'screen'}>
                {(errorType !== '') ? <div>Incorrect value</div> : <div>Enter values and press 'set'</div>}
                <ValueForm
                    className={`${(errorType === 'errorMax' || errorType === 'error') ? 'errorBlock' : ''}`}
                    value={values.max}
                    title={'Max value toggle: '}
                    onChange={(num) => getValueHandler('max', num)}
                />
                <ValueForm
                    className={`${(errorType === 'errorMin' || errorType === 'error') ? 'errorBlock' : ''}`}
                    value={values.min}
                    title={'Min value toggle: '}
                    onChange={(num) => getValueHandler('min', num)}
                />
            </div>
            <div className={'buttons'}>
                <Button
                    name={'set'}
                    disabled={errorType !== ''}
                    onclick={setValuesHandler}/>
            </div>
        </div>
    );
};

