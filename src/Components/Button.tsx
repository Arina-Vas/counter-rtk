type ButtonType = {
    name: string,
    disabled?: boolean,
    onclick:()=>void,
}

export const Button = ({name, disabled, onclick}: ButtonType) => {
    const className = `button ${disabled ? 'dis' : 'active'}`
    return (
        <button disabled={disabled} className={className} onClick={onclick}>
            {name}
        </button>
    );
};