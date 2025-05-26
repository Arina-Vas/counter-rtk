import s from '../../../styles/Counters.module.css'
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectCountToggle, selectMaxValueToggle} from "@/features/counters/model/counterToggle/counterToggleSelectors.ts";

export const Screen_toggle = () => {

    const maxValue = useAppSelector(selectMaxValueToggle);
    const count = useAppSelector(selectCountToggle);

    return (
        <div className={s.screen}>
            <div className={'max'}>Max value: {maxValue} </div>
            <div>{count}</div>
        </div>
    )
        ;
};

