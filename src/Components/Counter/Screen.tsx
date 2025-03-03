import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCount, selectEditMode, selectErrorMode, selectMaxValue} from "../../model/counterSelectors.ts";

export const Screen = () => {
    const maxValue = useAppSelector(selectMaxValue);
    const count = useAppSelector(selectCount);
    const errorMode = useAppSelector(selectErrorMode);
    const editMode = useAppSelector(selectEditMode);
    const className = `screen ${errorMode ? 'error' : ''}`

    return (
        <div className={className}>
            {
                errorMode ? (<div>Incorrect value</div>) : editMode ?
                        (<div>Enter values and press 'set'</div>)
                      :
                        (<>
                            <div className={'max'}>Max value: {maxValue} </div>
                            <div>{count}</div>
                        </>)
            }
        </div>
    )
        ;
};

