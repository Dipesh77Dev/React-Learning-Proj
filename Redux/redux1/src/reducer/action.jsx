// const changeValue = (state, action) => {}

const initialState = 10;

// value should not be changed bcoz reducer is a pure functn.

const changeValue = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;
        case "RESET" : return state = 0;
        default : return state;
    }
}

export default changeValue;