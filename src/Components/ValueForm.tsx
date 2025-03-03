import {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {changeEditModeAC} from "../model/counter/counter-reducer.ts";

type Props = {
    title: string
    onChange: (num: number) => void
    value: number
    className: string
};
export const ValueForm = ({title,onChange,value,className}: Props) => {

    const dispatch = useDispatch()

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        e.target.value = e.target.value.replace(/^0/, '')
        onChange(+e.target.value)
        dispatch(changeEditModeAC({editMode:true}))
    }


    return (
        <div>
            <label htmlFor="">{title}
                <input className={className}
                       value={value}
                       type={'number'}
                       onChange={onChangeHandler} />
            </label>
        </div>
    );
};
