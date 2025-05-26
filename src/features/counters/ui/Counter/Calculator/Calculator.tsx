import s from '@/features/counters/styles/Counters.module.css'
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {
    selectCount, selectEditMode, selectError,
    selectMaxValue,
    selectMinValue
} from "@/features/counters/model/counter/counterSelectors.ts";
import {setCountValueAC} from "@/features/counters/model/counter/counter-reducer.ts";
import {Button} from "@/common/components/Button/Button.tsx";
import {Screen} from "@/features/counters/ui/Counter/Calculator/Screen/Screen.tsx";


export const Calculator = () => {
    const dispatch = useAppDispatch();
    const minValue = useAppSelector(selectMinValue);
    const maxValue = useAppSelector(selectMaxValue);
    const count = useAppSelector(selectCount);
    const editMode = useAppSelector(selectEditMode);
    const error = useAppSelector(selectError);

    const onClickIncHandler = () => {
        if (count < maxValue && !error) {
            dispatch(setCountValueAC({count: count+1}))
        }
    }
    const onClickResetHandler = () => {
        if (!error) dispatch(setCountValueAC({count: minValue}))
    }

    const isButtonIncDisabled = (count === maxValue) || !!error || editMode
    const isButtonResetDisabled = ( count === minValue) || !!error || editMode

    const progressValue = (editMode || error) ? 0  : count


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