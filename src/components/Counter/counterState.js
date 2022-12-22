export const increment = () => ({
    type: "[counter] INCREMENT"
});

export const decrement = () => ({
    type: "[counter] DECREMENT"
});

export const boost = (offset = 1) => ({
    type: "[counter] BOOST",
    payload: offset
})


export function counterReducer(state, action) {
    switch (action.type) {
        case "[counter] INCREMENT":
            return state + 1;
        case "[counter] DECREMENT":
            return state - 1;
        case "[counter] BOOST":
            return state + action.payload;
        default:
            return state;
    }
}

export const startBoost = (offset = 1) => ({
    type: "[counter] START_BOOST",
    payload: offset,
})

export const counterMiddleware = ({dispatch}) => (next) => (action) => {
    next (action);

    if(action.type === "[counter] START_BOOST") {
        setTimeout(() => {
            console.log("[counter] BOOST --- Someone is boosting with number " + action.payload);
            dispatch(boost(action.payload));
            
        }, 1000);
    }
}