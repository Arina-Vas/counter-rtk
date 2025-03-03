type ScreenType = {
    count: number
    maxValue: number
}

export const Screen_toggle = ({count, maxValue}: ScreenType) => {
    return (
        <div className={'screen'}>
            <div className={'max'}>Max value: {maxValue} </div>
            <div>{count}</div>
        </div>
    )
        ;
};

