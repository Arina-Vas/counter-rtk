import {Button} from "../Button.tsx";
import {useEffect, useState} from "react";
import {Settings_toggle} from "./Settings_toggle.tsx";
import {KeyValueType} from "../../app/App.tsx";
import {Screen_toggle} from "./Screen_toggle.tsx";

type Props = {
    count: number
    maxValue: number
    minValue: number
    setValuesOnClick: (payload: { key: 'maxValue' | 'minValue' | 'count', num: number }) => void
    initialSettingsMode: boolean
};


export const Counter_toggle = ({count, maxValue, minValue, setValuesOnClick, initialSettingsMode}: Props) => {

    useEffect(() => {
        localStorage.setItem('Count toggle: ', JSON.stringify(count));
    }, [count]);

    const onClickIncHandler = () => {
        if (count < maxValue) {
            setValuesOnClick({key: 'count', num: ++count})
        }
    }
    const onClickResetHandler = () => {
        if (count > minValue) setValuesOnClick({key: 'count', num: minValue})
    }

    const onClickSetHandler = () => {
        setSettingMode(true)
    }

    const [settingsMode, setSettingMode] = useState(initialSettingsMode)

    const setValuesOnClickHandler = (payload: { key: KeyValueType, num: number }) => {
        const {key, num} = payload
        setValuesOnClick({key, num})
    }

    useEffect(() => {
        localStorage.setItem('settingsMode', JSON.stringify(settingsMode))
    }, [settingsMode]);

    const IsButtonIncDisabled = count === maxValue
    const IsButtonResetDisabled = count === minValue


    return (
        settingsMode ?
            <Settings_toggle
                minValue={minValue}
                maxValue={maxValue}
                setValuesOnClick={setValuesOnClickHandler}
                setSettingMode={setSettingMode}/>
            :
            <div className={'table'}>
                <Screen_toggle
                    count={count}
                    maxValue={maxValue}/>
                <progress
                    className={'progress'}
                    max={maxValue}
                    value={count}>

                </progress>
                <div className={'buttons'}>
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