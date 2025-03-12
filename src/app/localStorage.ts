

// export const loadState = () => {
//     try {
//         const serializedState = localStorage.getItem('state');
//         if (serializedState === null) {
//             return undefined;
//         }
//         return JSON.parse(serializedState);
//     } catch (err) {
//         return undefined;
//     }
// };

export function saveState<T> (key: string, state:T){
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch {
        // ignore write errors
    }
};

export function restoreState<T>(key: string, defaultState: T) {
    let state = defaultState
    const serializedState = localStorage.getItem(key)
    if (serializedState !== null) state = JSON.parse(serializedState)
    return state
}