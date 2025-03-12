import s from './Button.module.css'

type ButtonType = {
    name: string,
    disabled?: boolean,
    onclick:()=>void,
}

export const Button = ({name, disabled, onclick}: ButtonType) => {
    const className = `${s.button} ${disabled ? s.dis : s.active}`

    return (
        <button disabled={disabled} className={className} onClick={onclick}>
            {name}
        </button>
    );
};