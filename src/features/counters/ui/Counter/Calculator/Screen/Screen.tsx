import s from '@/features/counters/styles/Counters.module.css'
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {
    selectCount,
    selectEditMode, selectError,
    selectMaxValue
} from "@/features/counters/model/counter/counterSelectors.ts";


export const Screen = () => {
    const maxValue = useAppSelector(selectMaxValue);
    const count = useAppSelector(selectCount);
    const error = useAppSelector(selectError);
    const editMode = useAppSelector(selectEditMode);
    const className = `${s.screen} ${error ? s.error : ''}`

    return (
        <div className={className}>
            {
                error ? (<div>Incorrect value</div>) : editMode ?
                    (<div>Enter values and press 'set'</div>)
                    :
                    (<>
                        <div className={s.max}>Max value: {maxValue} </div>
                        <div>{count}</div>
                    </>)
            }
        </div>
    )
        ;
};

