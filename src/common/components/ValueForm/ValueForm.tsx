import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {changeEditModeAC} from "@/features/counters/model/counter/counter-reducer.ts";
import s from './ValueForm.module.css'


type Props = {
    title: string
    onChange: (num: number) => void
    value: number
    isError: boolean
};
export const ValueForm = ({title, onChange, value, isError}: Props) => {

    const dispatch = useDispatch()
    const [changedValue, setChangedValue] = useState<number>(value)
    const pushChanges = (num: number) => {
        setChangedValue(num)
        onChange(num)
        dispatch(changeEditModeAC({editMode: true}))
    }

    const increase = () => {
        pushChanges(changedValue + 1)
    }

    const decrease = () => {
        pushChanges(changedValue - 1)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value = e.target.value.replace(/^0+|\D+/g, '')
        pushChanges(+e.target.value)
    }
  const className =  isError ? `${s.input} ${s.errorBlock}` : s.input

    return (
        <div>
            <label htmlFor="" style={{display: "flex",alignItems:'center',gap:'5px',justifyContent:'center'}}>{title}
                <div className={s.container}>
                    <button className={s.arrow} onClick={decrease}>-</button>
                    <input className={className}
                           value={changedValue}
                           onChange={onChangeHandler}>
                    </input>
                    <button className={s.arrow} onClick={increase}>+</button>
                </div>
            </label>
        </div>
    );
};
