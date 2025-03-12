import s from '@/features/counters/Counters.module.css'
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {
    selectCount, selectEditMode,
    selectErrorMode,
    selectMaxValue,
    selectMinValue
} from "@/features/counters/model/counterSelectors.ts";
import {setCountValueAC} from "@/features/counters/model/counter-reducer.ts";
import {Button} from "@/common/components/Button/Button.tsx";
import {Screen} from "@/features/counters/Counter/Calculator/Screen/Screen.tsx";

export const Calculator = () => {
    const dispatch = useAppDispatch();
    const minValue = useAppSelector(selectMinValue);
    const maxValue = useAppSelector(selectMaxValue);
    const count = useAppSelector(selectCount);
    const errorMode = useAppSelector(selectErrorMode);
    const editMode = useAppSelector(selectEditMode);

    const onClickIncHandler = () => {
        if (count < maxValue && !errorMode) {
            dispatch(setCountValueAC({count: count+1}))
        }
    }
    const onClickResetHandler = () => {
        if (!errorMode) dispatch(setCountValueAC({count: minValue}))
    }

    const isButtonIncDisabled = (count === maxValue) || errorMode || editMode
    const isButtonResetDisabled = ( count === minValue) || errorMode || editMode

    const progressValue = (editMode || errorMode) ? 0  : count

    return (
        <div className={s.table}>
            <Screen/>
            <progress
                className={s.progress}
                max={maxValue}
                value={progressValue}>
            </progress>
            <div className={s.buttons}>
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