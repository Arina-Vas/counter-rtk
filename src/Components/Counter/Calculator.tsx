import {Screen} from "./Screen.tsx";
import {Button} from "../Button.tsx";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {setCountValueAC} from "../../model/counter/counter-reducer.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {
    selectCount, selectEditMode,
    selectErrorMode,
    selectMaxValue,
    selectMinValue
} from "../../model/counter/counterSelectors.ts";

export const Calculator = () => {
    const dispatch = useAppDispatch();
    const minValue = useAppSelector(selectMinValue);
    const maxValue = useAppSelector(selectMaxValue);
    let count = useAppSelector(selectCount);
    const errorMode = useAppSelector(selectErrorMode);
    const editMode = useAppSelector(selectEditMode);

    const onClickIncHandler = () => {
        if (count < maxValue && !errorMode) {
            dispatch(setCountValueAC({count: ++count}))
        }
    }
    const onClickResetHandler = () => {
        if (!errorMode) dispatch(setCountValueAC({count: minValue}))
    }

    const getDisabled = (title: 'inc' | 'reset') => {
        return count === (title === 'inc' ? maxValue : minValue) || errorMode || editMode
    }

    const isButtonIncDisabled = getDisabled('inc')
    const isButtonResetDisabled = getDisabled('reset')

    const progressValue = editMode ? 0 : errorMode ? 0 : count

    return (
        <div className={'table'}>
            <Screen/>
            <progress
                className={'progress'}
                max={maxValue}
                value={progressValue}>
            </progress>
            <div className={'buttons'}>
                <Button name={'inc'}
                        disabled={isButtonIncDisabled}
                        onclick={onClickIncHandler}/>
                <Button name={'reset'}
                        disabled={isButtonResetDisabled}
                        onclick={onClickResetHandler}/>
            </div>
        </div>
    );
};