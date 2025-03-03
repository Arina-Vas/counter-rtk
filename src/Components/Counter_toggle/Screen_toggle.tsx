import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCountToggle, selectMaxValueToggle} from "../../model/counterToggle/counterToggleSelectors.ts";
import s from '../../app/App.module.css';

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

